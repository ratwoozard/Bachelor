extends Node
## ContentService: Læser og validerer indhold fra res://content/
## Udstiller API: hent modul, hent spørgsmål, søg i content, items (get_all_items, get_items_by_lens). Ingen netværk.

var _content_index: Dictionary = {}
var _items: Array = []

func _ready() -> void:
	_reload_index()
	_load_items()

func _reload_index() -> void:
	var path := "res://content/content_index.json"
	if not FileAccess.file_exists(path):
		_content_index = {}
		return
	var f := FileAccess.open(path, FileAccess.READ)
	if f:
		var raw := f.get_as_text()
		f.close()
		var json := JSON.new()
		if json.parse(raw) == OK:
			_content_index = json.get_data()
		else:
			_content_index = {}

func get_module(module_id: String) -> Dictionary:
	if _content_index.has("modules") and _content_index.modules is Dictionary:
		return _content_index.modules.get(module_id, {})
	return {}

func get_question(module_id: String, question_id: String) -> Dictionary:
	var questions_path := "res://content/questions/%s.json" % module_id
	if not FileAccess.file_exists(questions_path):
		return {}
	var f := FileAccess.open(questions_path, FileAccess.READ)
	if not f:
		return {}
	var raw := f.get_as_text()
	f.close()
	var json := JSON.new()
	if json.parse(raw) != OK:
		return {}
	var data = json.get_data()
	if data is Dictionary and data.has(question_id):
		return data[question_id]
	return {}

func get_all_modules() -> Dictionary:
	return _content_index.get("modules", {})

func search_in_content(query: String) -> Array:
	var results: Array = []
	query = query.to_lower()
	var modules := get_all_modules()
	if not modules.is_empty():
		for id in modules:
			var m: Dictionary = modules[id]
			if m.get("title", "").to_lower().contains(query) or m.get("description", "").to_lower().contains(query):
				results.append(m)
	return results

func _load_items() -> void:
	var path := "res://content/items.json"
	if not FileAccess.file_exists(path):
		_items = []
		push_error("[ContentService] Missing file: %s" % path)
		print("[ContentService] items loaded: 0")
		return
	var f := FileAccess.open(path, FileAccess.READ)
	if not f:
		_items = []
		push_error("[ContentService] Could not open file: %s" % path)
		print("[ContentService] items loaded: 0")
		return
	var raw := f.get_as_text()
	f.close()
	var json := JSON.new()
	if json.parse(raw) != OK:
		_items = []
		push_error("[ContentService] JSON parse error in %s" % path)
		print("[ContentService] items loaded: 0")
		return
	var data = json.get_data()
	_items = []
	if data is Array:
		for it in data:
			if it is Dictionary and _is_valid_item(it):
				_items.append(it)
	print("[ContentService] items loaded: %d" % _items.size())

func _is_valid_item(it: Dictionary) -> bool:
	return it.has("id") \
		and it.has("lens") \
		and it.has("prompt") \
		and it.has("options") \
		and it.has("correct_index") \
		and it.has("explanation")

func get_all_items() -> Array:
	return _items.duplicate(true)

func get_items_by_lens(lens: String) -> Array:
	var out: Array = []
	var needle := lens.to_lower()
	for it in _items:
		if String(it.get("lens", "")).to_lower() == needle:
			out.append(it)
	return out
