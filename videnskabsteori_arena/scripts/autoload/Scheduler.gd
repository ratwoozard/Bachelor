extends Node
## Scheduler: Holder styr på progression og planlægning.
## Leitner: is_due, get_due_items, record_review; schedule i user://schedule.json.

const BOX_INTERVAL_DAYS := { 1: 0, 2: 2, 3: 4, 4: 7, 5: 14 }
var _schedule: Dictionary = {}
var _ab_variant_for_day: String = ""
var _ab_variant_date_iso: String = ""

func _ready() -> void:
	_schedule = Storage.get_schedule()
	get_ab_variant()

func get_ab_variant() -> String:
	var dt: Dictionary = Time.get_datetime_dict_from_system()
	var iso := "%04d-%02d-%02d" % [dt.year, dt.month, dt.day]
	var variant := "A" if (int(dt.day) % 2 == 0) else "B"
	if _ab_variant_date_iso != iso:
		_ab_variant_date_iso = iso
		_ab_variant_for_day = variant
		EventLog.log("ab_variant", { "variant": variant, "date": iso })
	return _ab_variant_for_day

func is_due(item: Dictionary) -> bool:
	var item_id: String = item.get("id", "")
	if item_id.is_empty():
		return false
	var entry = _schedule.get(item_id, null)
	if entry == null or not (entry is Dictionary):
		return true
	var box: int = entry.get("box", 1)
	var last: String = entry.get("last_review_date", "")
	if last.is_empty():
		return true
	var interval: int = BOX_INTERVAL_DAYS.get(box, 0)
	var days := _days_since(last)
	return days >= interval

func get_due_items() -> Array:
	var all_items: Array = ContentService.get_all_items()
	var out: Array = []
	for it in all_items:
		if it is Dictionary and is_due(it):
			out.append(it)
	return out

func record_review(item_id: String, correct: bool) -> void:
	var entry: Dictionary = _schedule.get(item_id, { "box": 1, "last_review_date": "" }).duplicate()
	if not entry is Dictionary:
		entry = { "box": 1, "last_review_date": "" }
	var box: int = entry.get("box", 1)
	if correct:
		box = mini(box + 1, 5)
	else:
		box = 1
	entry["box"] = box
	entry["last_review_date"] = _today_iso()
	_schedule[item_id] = entry
	Storage.set_schedule(_schedule)

func has_schedule_entry(item_id: String) -> bool:
	return _schedule.has(item_id)

func _today_iso() -> String:
	var dt: Dictionary = Time.get_datetime_dict_from_system()
	return "%04d-%02d-%02d" % [dt.year, dt.month, dt.day]

func _days_since(date_iso: String) -> int:
	if date_iso.is_empty():
		return 999
	var parts := date_iso.split("-")
	if parts.size() < 3:
		return 999
	var y := int(parts[0])
	var m := int(parts[1])
	var d := int(parts[2])
	var past := Time.get_unix_time_from_datetime_dict({ "year": y, "month": m, "day": d, "hour": 0, "minute": 0, "second": 0 })
	var now_dict := Time.get_datetime_dict_from_system()
	var today := Time.get_unix_time_from_datetime_dict({ "year": now_dict.year, "month": now_dict.month, "day": now_dict.day, "hour": 0, "minute": 0, "second": 0 })
	return int((today - past) / 86400)

func get_next_suggestions(limit: int = 5) -> Array:
	var progress: Dictionary = Storage.get_progress()
	var modules: Dictionary = ContentService.get_all_modules()
	if modules.is_empty():
		return []
	var out: Array = []
	for id in modules:
		var completed: Array = progress.get("completed_lessons", [])
		if id in completed:
			continue
		out.append({ "module_id": id, "title": modules[id].get("title", id) })
		if out.size() >= limit:
			break
	return out

func mark_lesson_completed(module_id: String, lesson_id: String) -> void:
	var progress: Dictionary = Storage.get_progress()
	var key := "%s/%s" % [module_id, lesson_id]
	if progress.get("completed_lessons", []).has(key):
		return
	var completed: Array = progress.get("completed_lessons", [])
	completed.append(key)
	progress["completed_lessons"] = completed
	Storage.set_progress(progress)
