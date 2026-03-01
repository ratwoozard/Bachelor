extends Control
## Stats: viser attempts, accuracy, per lens, Leitner box counts, overconfidence errors; export JSON/CSV.

@onready var _mode_label: Label = $Margin/VBox/ModeLabel
@onready var _variant_filter: OptionButton = $Margin/VBox/FilterRow/VariantFilter
@onready var _total_label: Label = $Margin/VBox/TotalAttemptsLabel
@onready var _accuracy_label: Label = $Margin/VBox/AccuracyLabel
@onready var _per_lens_label: Label = $Margin/VBox/AccuracyPerLensLabel
@onready var _box_counts_label: Label = $Margin/VBox/BoxCountsLabel
@onready var _overconfidence_label: Label = $Margin/VBox/OverconfidenceLabel
@onready var _export_path_label: Label = $Margin/VBox/ExportPathLabel
@onready var _export_json_btn: Button = $Margin/VBox/ExportJsonButton
@onready var _export_csv_btn: Button = $Margin/VBox/ExportCsvButton
@onready var _tilbage_btn: Button = $Margin/VBox/TilbageBtn

func _ready() -> void:
	_tilbage_btn.pressed.connect(_go_home)
	_variant_filter.clear()
	_variant_filter.add_item("All", 0)
	_variant_filter.add_item("A", 1)
	_variant_filter.add_item("B", 2)
	_variant_filter.selected = 0
	_refresh()
	_variant_filter.item_selected.connect(func(_idx: int) -> void: _refresh())
	_export_json_btn.pressed.connect(_on_export_json)
	_export_csv_btn.pressed.connect(_on_export_csv)

func _refresh() -> void:
	_mode_label.text = "Dagens mode: %s" % Scheduler.get_ab_variant()
	var attempts: Array = EventLog.get_attempts()
	var selected_variant: String = ""
	if _variant_filter.selected == 1:
		selected_variant = "A"
	elif _variant_filter.selected == 2:
		selected_variant = "B"
	if not selected_variant.is_empty():
		var filtered: Array = []
		for a in attempts:
			if a is Dictionary and String(a.get("variant", "")) == selected_variant:
				filtered.append(a)
		attempts = filtered
	var schedule: Dictionary = Storage.get_schedule()
	var total := attempts.size()
	_total_label.text = "Total attempts: %d" % total
	var correct_count := 0
	var overconfidence_count := 0
	var by_lens: Dictionary = {}
	for a in attempts:
		if a is not Dictionary:
			continue
		if a.get("correct", false):
			correct_count += 1
		var conf: int = a.get("confidence", 0)
		if not a.get("correct", false) and conf > 70:
			overconfidence_count += 1
		var lens: String = a.get("lens", "")
		if not by_lens.has(lens):
			by_lens[lens] = { "correct": 0, "total": 0 }
		by_lens[lens].total += 1
		if a.get("correct", false):
			by_lens[lens].correct += 1
	var pct: float = (100.0 * correct_count / total) if total > 0 else 0.0
	_accuracy_label.text = "Accuracy: %.1f%%" % pct
	var per_lens_lines: Array = []
	for lens in by_lens:
		var d = by_lens[lens]
		var lpct := (100.0 * d.correct / d.total) if d.total > 0 else 0.0
		per_lens_lines.append("%s: %.1f%% (%d/%d)" % [lens, lpct, d.correct, d.total])
	_per_lens_label.text = "Per lens:\n" + "\n".join(per_lens_lines) if per_lens_lines.size() > 0 else "Per lens: —"
	var box_counts: Dictionary = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
	for item_id in schedule:
		var entry = schedule[item_id]
		if entry is Dictionary:
			var b: int = entry.get("box", 1)
			if b >= 1 and b <= 5:
				box_counts[b] = box_counts.get(b, 0) + 1
	_box_counts_label.text = "Leitner boxes:\n1: %d  2: %d  3: %d  4: %d  5: %d" % [box_counts[1], box_counts[2], box_counts[3], box_counts[4], box_counts[5]]
	_overconfidence_label.text = "Overconfidence errors (wrong + confidence > 70): %d" % overconfidence_count
	_export_path_label.text = ""

func _on_export_json() -> void:
	var path := EventLog.export_attempts_json()
	_export_path_label.text = "Exported: " + path
	print("[Stats] Export JSON: ", path)

func _on_export_csv() -> void:
	var path := EventLog.export_attempts_csv()
	_export_path_label.text = "Exported: " + path
	print("[Stats] Export CSV: ", path)

func _go_home() -> void:
	get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
