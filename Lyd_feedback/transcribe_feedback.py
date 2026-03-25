import json
import math
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

import av
import numpy as np
from faster_whisper import WhisperModel


INPUT_DIR = Path(__file__).resolve().parent
TRANSCRIPTS_DIR = INPUT_DIR / "transcripts"
RAW_DIR = TRANSCRIPTS_DIR / "raw"
REVIEW_DIR = TRANSCRIPTS_DIR / "review"
LOGS_DIR = TRANSCRIPTS_DIR / "logs"

MODEL_SIZE = "medium"
MODEL_DEVICE = "cpu"
MODEL_COMPUTE_TYPE = "int8"
LANGUAGE = "da"

# Conservative thresholds: keep content, only flag when genuinely uncertain.
AVG_LOGPROB_THRESHOLD = -0.85
NO_SPEECH_THRESHOLD = 0.6
WORD_PROB_THRESHOLD = 0.6
LOW_WORD_RATIO_THRESHOLD = 0.35


@dataclass
class SegmentRecord:
    index: int
    start: float
    end: float
    text: str
    avg_logprob: float
    no_speech_prob: float
    low_word_ratio: float
    uncertain: bool
    reasons: List[str]


def seconds_to_mmss(seconds: float) -> str:
    total = max(0, int(round(seconds)))
    mm = total // 60
    ss = total % 60
    return f"{mm:02d}:{ss:02d}"


def ts_range(start: float, end: float) -> str:
    return f"{seconds_to_mmss(start)}-{seconds_to_mmss(end)}"


def audio_to_numpy(audio_path: Path) -> np.ndarray:
    container = av.open(str(audio_path))
    stream = container.streams.audio[0]
    resampler = av.audio.resampler.AudioResampler(format="s16", layout="mono", rate=16000)
    chunks: List[np.ndarray] = []

    for frame in container.decode(stream):
        out = resampler.resample(frame)
        if out is None:
            continue
        frames = out if isinstance(out, list) else [out]
        for f in frames:
            data = f.to_ndarray()
            chunks.append(data.reshape(-1))

    if not chunks:
        return np.zeros(16000, dtype=np.float32)

    pcm = np.concatenate(chunks).astype(np.float32)
    pcm /= 32768.0
    return pcm


def compute_low_word_ratio(segment) -> float:
    words = getattr(segment, "words", None) or []
    probs = [w.probability for w in words if w.probability is not None]
    if not probs:
        return 0.0
    low = sum(1 for p in probs if p < WORD_PROB_THRESHOLD)
    return low / len(probs)


def evaluate_uncertainty(avg_logprob: float, no_speech_prob: float, low_word_ratio: float) -> Tuple[bool, List[str]]:
    reasons: List[str] = []
    if avg_logprob < AVG_LOGPROB_THRESHOLD:
        reasons.append(f"lav avg_logprob ({avg_logprob:.2f})")
    if no_speech_prob > NO_SPEECH_THRESHOLD:
        reasons.append(f"hoj no_speech_prob ({no_speech_prob:.2f})")
    if low_word_ratio > LOW_WORD_RATIO_THRESHOLD:
        reasons.append(f"mange lav-konfidens ord ({low_word_ratio:.0%})")
    return (len(reasons) > 0, reasons)


def transcribe_full(model: WhisperModel, audio_path: Path) -> List[SegmentRecord]:
    segments, _info = model.transcribe(
        str(audio_path),
        language=LANGUAGE,
        beam_size=5,
        best_of=5,
        temperature=0.0,
        vad_filter=True,
        word_timestamps=True,
        condition_on_previous_text=True,
    )

    records: List[SegmentRecord] = []
    for idx, segment in enumerate(segments, start=1):
        text = (segment.text or "").strip()
        avg_logprob = float(segment.avg_logprob if segment.avg_logprob is not None else -1.0)
        no_speech_prob = float(segment.no_speech_prob if segment.no_speech_prob is not None else 0.0)
        low_word_ratio = compute_low_word_ratio(segment)
        uncertain, reasons = evaluate_uncertainty(avg_logprob, no_speech_prob, low_word_ratio)
        records.append(
            SegmentRecord(
                index=idx,
                start=float(segment.start),
                end=float(segment.end),
                text=text,
                avg_logprob=avg_logprob,
                no_speech_prob=no_speech_prob,
                low_word_ratio=low_word_ratio,
                uncertain=uncertain,
                reasons=reasons,
            )
        )
    return records


def second_pass_on_uncertain(model: WhisperModel, audio_pcm: np.ndarray, records: List[SegmentRecord]) -> Dict[int, Dict]:
    updates: Dict[int, Dict] = {}
    for rec in records:
        if not rec.uncertain:
            continue

        pad = 0.9
        clip_start = max(0.0, rec.start - pad)
        clip_end = rec.end + pad
        start_i = int(math.floor(clip_start * 16000))
        end_i = int(math.ceil(clip_end * 16000))
        chunk = audio_pcm[start_i:end_i]
        if chunk.size < 1600:
            continue

        segments, _info = model.transcribe(
            chunk,
            language=LANGUAGE,
            beam_size=8,
            best_of=8,
            temperature=0.0,
            vad_filter=False,
            word_timestamps=True,
            condition_on_previous_text=False,
            without_timestamps=False,
        )

        text_parts = []
        best_avg = -10.0
        best_no_speech = 1.0
        best_low_word_ratio = 1.0
        for s in segments:
            t = (s.text or "").strip()
            if t:
                text_parts.append(t)
            if s.avg_logprob is not None:
                best_avg = max(best_avg, float(s.avg_logprob))
            if s.no_speech_prob is not None:
                best_no_speech = min(best_no_speech, float(s.no_speech_prob))
            low_ratio = compute_low_word_ratio(s)
            best_low_word_ratio = min(best_low_word_ratio, low_ratio)

        joined = " ".join(text_parts).strip()
        if not joined:
            continue

        old_score = rec.avg_logprob - rec.no_speech_prob - rec.low_word_ratio
        new_score = best_avg - best_no_speech - best_low_word_ratio
        improved = new_score > old_score + 0.05

        updates[rec.index] = {
            "replacement_text": joined,
            "avg_logprob": best_avg,
            "no_speech_prob": best_no_speech,
            "low_word_ratio": best_low_word_ratio,
            "improved": improved,
        }

    return updates


def write_outputs(audio_path: Path, records: List[SegmentRecord], updates: Dict[int, Dict]) -> Dict[str, int]:
    stem = audio_path.stem
    raw_md = RAW_DIR / f"{stem}_transcript_raw.md"
    json_path = RAW_DIR / f"{stem}_segments.json"
    validated_md = REVIEW_DIR / f"{stem}_transcript_validated.md"
    uncertainty_md = LOGS_DIR / f"{stem}_uncertainty_log.md"

    raw_lines = [f"# Rå transskription - {audio_path.name}", ""]
    validated_lines = [f"# Valideret transskription - {audio_path.name}", ""]
    log_lines = [f"# Usikkerhedslog - {audio_path.name}", ""]

    segment_payload = []
    flagged_count = 0
    improved_count = 0

    for rec in records:
        update = updates.get(rec.index)
        text = rec.text
        avg_logprob = rec.avg_logprob
        no_speech_prob = rec.no_speech_prob
        low_word_ratio = rec.low_word_ratio
        review_note = "første pass"

        if update and update.get("replacement_text"):
            if update["improved"]:
                text = update["replacement_text"]
                avg_logprob = update["avg_logprob"]
                no_speech_prob = update["no_speech_prob"]
                low_word_ratio = update["low_word_ratio"]
                review_note = "opdateret i valideringspass"
                improved_count += 1
            else:
                review_note = "anden pass uden klar forbedring"

        uncertain, reasons = evaluate_uncertainty(avg_logprob, no_speech_prob, low_word_ratio)
        if uncertain:
            flagged_count += 1
            tag = f"[USIKKER {ts_range(rec.start, rec.end)}]"
            validated_lines.append(f"{tag} {text}")
            log_lines.append(
                "- "
                + f"{ts_range(rec.start, rec.end)} | segment {rec.index} | "
                + f"{'; '.join(reasons)} | {review_note}"
            )
        else:
            validated_lines.append(f"[{ts_range(rec.start, rec.end)}] {text}")

        raw_lines.append(f"[{ts_range(rec.start, rec.end)}] {rec.text}")
        segment_payload.append(
            {
                "segment_index": rec.index,
                "start": rec.start,
                "end": rec.end,
                "raw_text": rec.text,
                "validated_text": text,
                "avg_logprob": avg_logprob,
                "no_speech_prob": no_speech_prob,
                "low_word_ratio": low_word_ratio,
                "uncertain": uncertain,
                "uncertainty_reasons": reasons,
                "second_pass_used": bool(update),
                "second_pass_improved": bool(update and update.get("improved")),
            }
        )

    if flagged_count == 0:
        log_lines.append("Ingen usikre segmenter blev flagget.")

    raw_md.write_text("\n".join(raw_lines).strip() + "\n", encoding="utf-8")
    validated_md.write_text("\n".join(validated_lines).strip() + "\n", encoding="utf-8")
    uncertainty_md.write_text("\n".join(log_lines).strip() + "\n", encoding="utf-8")
    json_path.write_text(json.dumps(segment_payload, ensure_ascii=False, indent=2), encoding="utf-8")

    return {
        "segments_total": len(records),
        "segments_flagged": flagged_count,
        "segments_improved": improved_count,
    }


def write_master(files: List[Path]) -> None:
    master_path = REVIEW_DIR / "MASTER_feedback_transcript.md"
    lines = ["# MASTER feedback transskription", ""]
    for audio in files:
        validated_path = REVIEW_DIR / f"{audio.stem}_transcript_validated.md"
        lines.append(f"## {audio.name}")
        lines.append("")
        if validated_path.exists():
            lines.extend(validated_path.read_text(encoding="utf-8").strip().splitlines()[2:])
        else:
            lines.append("Mangler valideret transskription.")
        lines.append("")
    master_path.write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def main() -> None:
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    REVIEW_DIR.mkdir(parents=True, exist_ok=True)
    LOGS_DIR.mkdir(parents=True, exist_ok=True)

    audio_files = sorted(INPUT_DIR.glob("*.mp3"))
    if not audio_files:
        raise SystemExit(f"Ingen mp3-filer fundet i {INPUT_DIR}")

    print(f"Indlaeser model '{MODEL_SIZE}' ({MODEL_DEVICE}/{MODEL_COMPUTE_TYPE}) ...", flush=True)
    model = WhisperModel(MODEL_SIZE, device=MODEL_DEVICE, compute_type=MODEL_COMPUTE_TYPE)
    summary = []
    error_lines: List[str] = []

    for audio in audio_files:
        validated_path = REVIEW_DIR / f"{audio.stem}_transcript_validated.md"
        if validated_path.exists():
            summary.append({"file": audio.name, "status": "skipped_existing"})
            print(f"Springer over {audio.name} (allerede behandlet).", flush=True)
            continue

        print(f"\nBehandler {audio.name} ...", flush=True)
        try:
            records = transcribe_full(model, audio)
            audio_pcm = audio_to_numpy(audio)
            updates = second_pass_on_uncertain(model, audio_pcm, records)
            stats = write_outputs(audio, records, updates)
            summary.append({"file": audio.name, "status": "ok", **stats})
            print(
                f"Faerdig: {audio.name} | segmenter={stats['segments_total']} | "
                + f"usikre={stats['segments_flagged']} | forbedret_i_pass2={stats['segments_improved']}",
                flush=True,
            )
        except Exception as exc:
            error_line = f"{audio.name}: {type(exc).__name__}: {exc}"
            error_lines.append(error_line)
            summary.append({"file": audio.name, "status": "error", "error": str(exc)})
            print(f"FEJL i {audio.name}: {exc}", flush=True)

    write_master(audio_files)
    summary_path = LOGS_DIR / "transcription_summary.json"
    summary_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    if error_lines:
        errors_path = LOGS_DIR / "transcription_errors.log"
        errors_path.write_text("\n".join(error_lines) + "\n", encoding="utf-8")
        print(f"Fejllog skrevet til: {errors_path}", flush=True)

    print(f"\nSamlet masterfil skrevet til: {REVIEW_DIR / 'MASTER_feedback_transcript.md'}", flush=True)
    print(f"Summary skrevet til: {summary_path}", flush=True)


if __name__ == "__main__":
    main()
