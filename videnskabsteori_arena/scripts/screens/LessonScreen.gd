extends Control
## Lesson-skærm: Viser moduler og kapitler med læremateriale.

enum ViewState { MODULE_LIST, CHAPTER_LIST, CHAPTER_CONTENT }

var _current_state: ViewState = ViewState.MODULE_LIST
var _current_module_id: String = ""
var _current_chapter_index: int = 0

@onready var _title_label: Label = $Margin/VBox/TitleLabel
@onready var _content_scroll: ScrollContainer = $Margin/VBox/ContentScroll
@onready var _content_vbox: VBoxContainer = $Margin/VBox/ContentScroll/ContentVBox
@onready var _nav_row: HBoxContainer = $Margin/VBox/NavRow
@onready var _tilbage_btn: Button = $Margin/VBox/NavRow/TilbageBtn
@onready var _next_btn: Button = $Margin/VBox/NavRow/NextBtn

func _ready() -> void:
	_tilbage_btn.pressed.connect(_on_tilbage_pressed)
	_next_btn.pressed.connect(_on_next_pressed)
	_show_module_list()

func _clear_content() -> void:
	for c in _content_vbox.get_children():
		c.queue_free()

func _show_module_list() -> void:
	_current_state = ViewState.MODULE_LIST
	_current_module_id = ""
	_title_label.text = "Lektioner"
	_next_btn.visible = false
	_tilbage_btn.text = "Hjem"
	_clear_content()
	
	var modules: Dictionary = ContentService.get_all_modules()
	if modules.is_empty():
		var lbl := Label.new()
		lbl.text = "Ingen moduler fundet."
		lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		_content_vbox.add_child(lbl)
		return
	
	for module_id in modules:
		var m: Dictionary = modules[module_id]
		var title: String = m.get("title", module_id)
		var desc: String = m.get("description", "")
		var icon: String = m.get("icon", "")
		
		var btn := Button.new()
		btn.text = "%s %s" % [icon, title] if not icon.is_empty() else title
		btn.size_flags_horizontal = Control.SIZE_EXPAND_FILL
		btn.pressed.connect(_on_module_selected.bind(module_id))
		_content_vbox.add_child(btn)
		
		if not desc.is_empty():
			var sub := Label.new()
			sub.text = desc
			sub.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
			sub.add_theme_font_size_override("font_size", 14)
			sub.modulate = Color(0.7, 0.7, 0.7, 1.0)
			_content_vbox.add_child(sub)
		
		var spacer := Control.new()
		spacer.custom_minimum_size = Vector2(0, 12)
		_content_vbox.add_child(spacer)

func _on_module_selected(module_id: String) -> void:
	_current_module_id = module_id
	_show_chapter_list()

func _show_chapter_list() -> void:
	_current_state = ViewState.CHAPTER_LIST
	_tilbage_btn.text = "Tilbage"
	_next_btn.visible = false
	_clear_content()
	
	var lesson: Dictionary = ContentService.get_lesson(_current_module_id)
	var title: String = lesson.get("title", _current_module_id)
	_title_label.text = title
	
	var chapters: Array = lesson.get("chapters", [])
	if chapters.is_empty():
		var lbl := Label.new()
		lbl.text = "Ingen kapitler i dette modul."
		lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		_content_vbox.add_child(lbl)
		return
	
	var desc_label := Label.new()
	desc_label.text = lesson.get("description", "")
	desc_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	desc_label.modulate = Color(0.8, 0.8, 0.8, 1.0)
	_content_vbox.add_child(desc_label)
	
	var spacer := Control.new()
	spacer.custom_minimum_size = Vector2(0, 16)
	_content_vbox.add_child(spacer)
	
	for i in range(chapters.size()):
		var chapter: Dictionary = chapters[i]
		var ch_title: String = chapter.get("title", "Kapitel %d" % (i + 1))
		
		var btn := Button.new()
		btn.text = "%d. %s" % [i + 1, ch_title]
		btn.size_flags_horizontal = Control.SIZE_EXPAND_FILL
		btn.pressed.connect(_on_chapter_selected.bind(i))
		_content_vbox.add_child(btn)

func _on_chapter_selected(chapter_index: int) -> void:
	_current_chapter_index = chapter_index
	_show_chapter_content()

func _show_chapter_content() -> void:
	_current_state = ViewState.CHAPTER_CONTENT
	_tilbage_btn.text = "Tilbage"
	_clear_content()
	
	var chapters: Array = ContentService.get_lesson_chapters(_current_module_id)
	if _current_chapter_index >= chapters.size():
		_show_chapter_list()
		return
	
	var chapter: Dictionary = chapters[_current_chapter_index]
	var ch_title: String = chapter.get("title", "")
	var content: String = chapter.get("content", "")
	
	_title_label.text = ch_title
	
	var has_next: bool = _current_chapter_index < chapters.size() - 1
	_next_btn.visible = has_next
	_next_btn.text = "Næste kapitel"
	
	_render_markdown(content)

func _render_markdown(md_text: String) -> void:
	var lines := md_text.split("\n")
	var current_text := ""
	var in_code_block := false
	var code_content := ""
	var in_table := false
	var table_rows: Array = []
	
	for line in lines:
		if line.begins_with("```"):
			if in_code_block:
				_add_code_block(code_content.strip_edges())
				code_content = ""
				in_code_block = false
			else:
				if not current_text.is_empty():
					_add_text_block(current_text.strip_edges())
					current_text = ""
				in_code_block = true
			continue
		
		if in_code_block:
			code_content += line + "\n"
			continue
		
		if line.begins_with("|") and line.ends_with("|"):
			if not in_table:
				if not current_text.is_empty():
					_add_text_block(current_text.strip_edges())
					current_text = ""
				in_table = true
				table_rows = []
			if not (line.contains("---") and line.replace("|", "").replace("-", "").replace(" ", "").is_empty()):
				table_rows.append(line)
			continue
		elif in_table:
			_add_table(table_rows)
			table_rows = []
			in_table = false
		
		if line.begins_with("## "):
			if not current_text.is_empty():
				_add_text_block(current_text.strip_edges())
				current_text = ""
			_add_heading(line.substr(3), 24)
		elif line.begins_with("### "):
			if not current_text.is_empty():
				_add_text_block(current_text.strip_edges())
				current_text = ""
			_add_heading(line.substr(4), 20)
		elif line.begins_with("#### "):
			if not current_text.is_empty():
				_add_text_block(current_text.strip_edges())
				current_text = ""
			_add_heading(line.substr(5), 18)
		else:
			current_text += line + "\n"
	
	if in_table and not table_rows.is_empty():
		_add_table(table_rows)
	
	if not current_text.is_empty():
		_add_text_block(current_text.strip_edges())

func _add_heading(text: String, size: int) -> void:
	var lbl := Label.new()
	lbl.text = text
	lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	lbl.add_theme_font_size_override("font_size", size)
	_content_vbox.add_child(lbl)
	
	var spacer := Control.new()
	spacer.custom_minimum_size = Vector2(0, 8)
	_content_vbox.add_child(spacer)

func _add_text_block(text: String) -> void:
	if text.is_empty():
		return
	var rich := RichTextLabel.new()
	rich.bbcode_enabled = true
	rich.fit_content = true
	rich.scroll_active = false
	rich.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	
	var formatted := _convert_markdown_inline(text)
	rich.text = formatted
	_content_vbox.add_child(rich)
	
	var spacer := Control.new()
	spacer.custom_minimum_size = Vector2(0, 8)
	_content_vbox.add_child(spacer)

func _convert_markdown_inline(text: String) -> String:
	var result := text
	var bold_regex := RegEx.new()
	bold_regex.compile("\\*\\*(.+?)\\*\\*")
	result = bold_regex.sub(result, "[b]$1[/b]", true)
	
	var italic_regex := RegEx.new()
	italic_regex.compile("\\*(.+?)\\*")
	result = italic_regex.sub(result, "[i]$1[/i]", true)
	
	var code_regex := RegEx.new()
	code_regex.compile("`([^`]+)`")
	result = code_regex.sub(result, "[code]$1[/code]", true)
	
	result = result.replace("- ❌", "• [color=red]✗[/color]")
	result = result.replace("- ✓", "• [color=green]✓[/color]")
	result = result.replace("❌", "[color=red]✗[/color]")
	result = result.replace("✓", "[color=green]✓[/color]")
	result = result.replace("★", "[color=yellow]★[/color]")
	
	var lines := result.split("\n")
	var processed: PackedStringArray = []
	for line in lines:
		if line.begins_with("- "):
			processed.append("• " + line.substr(2))
		elif line.match("[0-9]. *"):
			processed.append(line)
		else:
			processed.append(line)
	
	return "\n".join(processed)

func _add_code_block(code: String) -> void:
	var panel := PanelContainer.new()
	panel.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	
	var style := StyleBoxFlat.new()
	style.bg_color = Color(0.15, 0.15, 0.15, 1.0)
	style.corner_radius_top_left = 4
	style.corner_radius_top_right = 4
	style.corner_radius_bottom_left = 4
	style.corner_radius_bottom_right = 4
	style.content_margin_left = 12
	style.content_margin_right = 12
	style.content_margin_top = 8
	style.content_margin_bottom = 8
	panel.add_theme_stylebox_override("panel", style)
	
	var lbl := Label.new()
	lbl.text = code
	lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	lbl.add_theme_font_size_override("font_size", 14)
	panel.add_child(lbl)
	
	_content_vbox.add_child(panel)
	
	var spacer := Control.new()
	spacer.custom_minimum_size = Vector2(0, 12)
	_content_vbox.add_child(spacer)

func _add_table(rows: Array) -> void:
	if rows.is_empty():
		return
	
	var grid := GridContainer.new()
	grid.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	
	var first_row: String = rows[0]
	var cols := first_row.split("|")
	cols = cols.filter(func(c): return not c.strip_edges().is_empty())
	grid.columns = cols.size()
	
	for i in range(rows.size()):
		var row: String = rows[i]
		var cells := row.split("|")
		cells = cells.filter(func(c): return not c.strip_edges().is_empty())
		
		for cell in cells:
			var lbl := Label.new()
			lbl.text = cell.strip_edges()
			lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
			lbl.size_flags_horizontal = Control.SIZE_EXPAND_FILL
			if i == 0:
				lbl.add_theme_font_size_override("font_size", 15)
			else:
				lbl.add_theme_font_size_override("font_size", 14)
				lbl.modulate = Color(0.85, 0.85, 0.85, 1.0)
			grid.add_child(lbl)
	
	_content_vbox.add_child(grid)
	
	var spacer := Control.new()
	spacer.custom_minimum_size = Vector2(0, 12)
	_content_vbox.add_child(spacer)

func _on_tilbage_pressed() -> void:
	match _current_state:
		ViewState.MODULE_LIST:
			get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
		ViewState.CHAPTER_LIST:
			_show_module_list()
		ViewState.CHAPTER_CONTENT:
			_show_chapter_list()

func _on_next_pressed() -> void:
	if _current_state == ViewState.CHAPTER_CONTENT:
		var chapters: Array = ContentService.get_lesson_chapters(_current_module_id)
		if _current_chapter_index < chapters.size() - 1:
			_current_chapter_index += 1
			_show_chapter_content()
