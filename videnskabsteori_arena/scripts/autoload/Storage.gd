extends Node
## Storage: Eneste sted der læser/skriver brugerdata til user://
## Progression, indstillinger, event-log export. Bruger res://data/ til schema/eksempler.

const SAVES_DIR := "user://saves/"
const PROGRESS_FILE := "user://saves/progress.json"
const SETTINGS_FILE := "user://saves/settings.json"
const SCHEDULE_FILE := "user://schedule.json"
const SAVE_VERSION := 1

func _ready() -> void:
	_ensure_saves_dir()

func _ensure_saves_dir() -> void:
	if not DirAccess.dir_exists_absolute(SAVES_DIR):
		DirAccess.make_dir_recursive_absolute(SAVES_DIR)

func get_progress() -> Dictionary:
	if not FileAccess.file_exists(PROGRESS_FILE):
		return _default_progress()
	var f := FileAccess.open(PROGRESS_FILE, FileAccess.READ)
	if not f:
		return _default_progress()
	var raw := f.get_as_text()
	f.close()
	var json := JSON.new()
	if json.parse(raw) != OK:
		return _default_progress()
	var data = json.get_data()
	if data is Dictionary:
		return _migrate_progress(data)
	return _default_progress()

func set_progress(progress: Dictionary) -> void:
	progress["_version"] = SAVE_VERSION
	var f := FileAccess.open(PROGRESS_FILE, FileAccess.WRITE)
	if f:
		f.store_string(JSON.stringify(progress))
		f.close()

func get_settings() -> Dictionary:
	if not FileAccess.file_exists(SETTINGS_FILE):
		return {}
	var f := FileAccess.open(SETTINGS_FILE, FileAccess.READ)
	if not f:
		return {}
	var raw := f.get_as_text()
	f.close()
	var json := JSON.new()
	if json.parse(raw) != OK:
		return {}
	var data = json.get_data()
	return data if data is Dictionary else {}

func set_settings(settings: Dictionary) -> void:
	var f := FileAccess.open(SETTINGS_FILE, FileAccess.WRITE)
	if f:
		f.store_string(JSON.stringify(settings))
		f.close()

func save_file_absolute(path: String, content: String) -> bool:
	var f := FileAccess.open(path, FileAccess.WRITE)
	if not f:
		return false
	f.store_string(content)
	f.close()
	return true

func load_file_absolute(path: String) -> String:
	if not FileAccess.file_exists(path):
		return ""
	var f := FileAccess.open(path, FileAccess.READ)
	if not f:
		return ""
	var s := f.get_as_text()
	f.close()
	return s

func get_schedule() -> Dictionary:
	if not FileAccess.file_exists(SCHEDULE_FILE):
		return {}
	var f := FileAccess.open(SCHEDULE_FILE, FileAccess.READ)
	if not f:
		return {}
	var raw := f.get_as_text()
	f.close()
	var json := JSON.new()
	if json.parse(raw) != OK:
		push_error("[Storage] JSON parse error in %s" % SCHEDULE_FILE)
		return {}
	var data = json.get_data()
	return data if data is Dictionary else {}

func set_schedule(schedule: Dictionary) -> void:
	var f := FileAccess.open(SCHEDULE_FILE, FileAccess.WRITE)
	if f:
		f.store_string(JSON.stringify(schedule))
		f.close()

func _default_progress() -> Dictionary:
	return { "completed_lessons": [], "_version": SAVE_VERSION }

func _migrate_progress(data: Dictionary) -> Dictionary:
	var v: int = data.get("_version", 0)
	if v >= SAVE_VERSION:
		return data
	# Fremtidig migrering kan tilføjes her
	data["_version"] = SAVE_VERSION
	return data
