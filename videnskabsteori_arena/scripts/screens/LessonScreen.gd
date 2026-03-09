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
			lbl.text = "📚 " + title
			lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
			lbl.add_theme_font_size_override("font_size", 22)
			_list_vbox.add_child(lbl)
			if not desc.is_empty():
				var sub := Label.new()
				sub.text = desc
				sub.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
				sub.add_theme_font_size_override("font_size", 14)
				_list_vbox.add_child(sub)
			_add_lessons_section(module_id)
			_add_question_cards_section(module_id)

			var sep := HSeparator.new()
			_list_vbox.add_child(sep)

func _add_lessons_section(module_id: String) -> void:
	var lessons: Array = ContentService.get_module_lessons(module_id)
	if lessons.is_empty():
		return
	var section_title := Label.new()
	section_title.text = "Lektionsoverblik"
	section_title.add_theme_font_size_override("font_size", 16)
	_list_vbox.add_child(section_title)
	for lesson in lessons:
		if lesson is not Dictionary:
			continue
		var item := Label.new()
		item.text = "• %s" % lesson.get("title", lesson.get("id", "Lektion"))
		item.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		_list_vbox.add_child(item)

func _add_question_cards_section(module_id: String) -> void:
	var cards: Array = ContentService.get_module_question_cards(module_id)
	if cards.is_empty():
		return
	var section_title := Label.new()
	section_title.text = "Nøglekort til repetition"
	section_title.add_theme_font_size_override("font_size", 16)
	_list_vbox.add_child(section_title)
	for card in cards:
		if card is not Dictionary:
			continue
		var prompt := String(card.get("prompt", ""))
		var answer := String(card.get("answer", ""))
		var explanation := String(card.get("explanation", ""))
		var card_label := Label.new()
		card_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		card_label.text = "• %s\n  Svar: %s\n  Hvorfor: %s" % [prompt, answer, explanation]
		card_label.add_theme_font_size_override("font_size", 13)
		_list_vbox.add_child(card_label)

func _go_home() -> void:
	get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
