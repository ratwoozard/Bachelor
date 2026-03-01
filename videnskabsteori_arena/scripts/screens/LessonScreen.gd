extends Control
## Lesson-skærm: Læsning af modulindhold.

@onready var _list_vbox: VBoxContainer = $Margin/VBox/ModuleList/ListVBox
@onready var _tilbage_btn: Button = $Margin/VBox/TilbageBtn

func _ready() -> void:
	_tilbage_btn.pressed.connect(_go_home)
	var modules: Dictionary = ContentService.get_all_modules()
	if modules.is_empty():
		var lbl := Label.new()
		lbl.text = "Ingen moduler fundet. Tjek content/content_index.json."
		_list_vbox.add_child(lbl)
	else:
		for module_id in modules:
			var m: Dictionary = modules[module_id]
			var title: String = m.get("title", module_id)
			var desc: String = m.get("description", "")
			var lbl := Label.new()
			lbl.text = title
			lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
			_list_vbox.add_child(lbl)
			if not desc.is_empty():
				var sub := Label.new()
				sub.text = desc
				sub.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
				sub.add_theme_font_size_override("font_size", 14)
				_list_vbox.add_child(sub)

func _go_home() -> void:
	get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
