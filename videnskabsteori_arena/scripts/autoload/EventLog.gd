extends Node
## EventLog: Lokal hændelseslog (audit, fejlfinding, læringshistorik).
## Bufferer i hukommelsen og kan persistere via Storage.
## Attempts gemmes i user://attempts.json.

const ATTEMPTS_FILE := "user://attempts.json"
var _buffer: Array = []
var _max_buffer := 500

func log(event_type: String, data: Dictionary = {}) -> void:
	var entry := {
		"ts": Time.get_unix_time_from_system(),
		"type": event_type,
		"data": data
	}
	_buffer.append(entry)
	if _buffer.size() > _max_buffer:
		_buffer.pop_front()

func get_recent(limit: int = 50) -> Array:
	var n := _buffer.size()
	if n <= limit:
		return _buffer.duplicate()
	return _buffer.slice(n - limit, n)

func persist_to_user_file(path: String) -> bool:
	var out := []
	for e in _buffer:
		out.append(e)
	var content := JSON.stringify(out)
	return Storage.save_file_absolute(path, content)

func clear_buffer() -> void:
	_buffer.clear()

func _load_attempts_raw() -> Array:
	if not FileAccess.file_exists(ATTEMPTS_FILE):
		return []
	var raw := Storage.load_file_absolute(ATTEMPTS_FILE)
	if raw.is_empty():
		return []
	var json := JSON.new()
	if json.parse(raw) != OK:
		push_error("[EventLog] JSON parse error in %s" % ATTEMPTS_FILE)
		return []
	var data = json.get_data()
	return data if data is Array else []

func append_attempt(attempt: Dictionary) -> void:
	var attempts: Array = _load_attempts_raw()
	attempts.append(attempt)
	var content := JSON.stringify(attempts)
	Storage.save_file_absolute(ATTEMPTS_FILE, content)

func get_attempts() -> Array:
	return _load_attempts_raw()

const EXPORTS_DIR := "user://exports/"

func _ensure_exports_dir() -> void:
	if not DirAccess.dir_exists_absolute(EXPORTS_DIR):
		DirAccess.make_dir_recursive_absolute(EXPORTS_DIR)

func export_attempts_json() -> String:
	_ensure_exports_dir()
	var attempts: Array = get_attempts()
	var ts := Time.get_unix_time_from_system()
	var path := "%sattempts_%d.json" % [EXPORTS_DIR, ts]
	var content := JSON.stringify(attempts)
	Storage.save_file_absolute(path, content)
	return path

func export_attempts_csv() -> String:
	_ensure_exports_dir()
	var attempts: Array = get_attempts()
	var ts := Time.get_unix_time_from_system()
	var path := "%sattempts_%d.csv" % [EXPORTS_DIR, ts]
	var lines: PackedStringArray = []
	lines.append("timestamp,item_id,lens,variant,correct,confidence")
	for a in attempts:
		if a is Dictionary:
			var correct_str: String = "true" if a.get("correct", false) else "false"
			lines.append("%d,%s,%s,%s,%s,%d" % [
				a.get("timestamp", 0),
				a.get("item_id", ""),
				a.get("lens", ""),
				a.get("variant", ""),
				correct_str,
				a.get("confidence", 0)
			])
	Storage.save_file_absolute(path, "\n".join(lines))
	return path
