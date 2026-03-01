extends Control
## Arena-skærm: op til 10 reviews; prioriterer due items (Leitner), re-queue ved forkert.

var _session_items: Array = []
var _current_index: int = 0
var _review_count: int = 0
var _confidence: int = 60
const MAX_REVIEWS := 10

@onready var _prompt_label: Label = $Margin/VBox/PromptLabel
@onready var _options_box: VBoxContainer = $Margin/VBox/OptionsBox
@onready var _feedback_label: Label = $Margin/VBox/FeedbackLabel
@onready var _next_button: Button = $Margin/VBox/NextButton
@onready var _conf_low_btn: Button = $Margin/VBox/ConfidenceRow/ConfidenceLowButton
@onready var _conf_medium_btn: Button = $Margin/VBox/ConfidenceRow/ConfidenceMediumButton
@onready var _conf_high_btn: Button = $Margin/VBox/ConfidenceRow/ConfidenceHighButton
@onready var _tilbage_btn: Button = $Margin/VBox/TilbageBtn

func _ready() -> void:
	_tilbage_btn.pressed.connect(_go_home)
	var pool: Array = ContentService.get_all_items()
	var valid: Array = []
	for it in pool:
		if _is_usable_item(it):
			valid.append(it)
	if valid.is_empty():
		_prompt_label.text = "Ingen spørgsmål tilgængelige. Tjek content/items.json."
		_options_box.visible = false
		_feedback_label.visible = false
		_next_button.visible = false
		return
	var due: Array = Scheduler.get_due_items()
	var due_valid: Array = []
	for it in due:
		if it is Dictionary and _is_usable_item(it):
			due_valid.append(it)
	if not due_valid.is_empty():
		due_valid.shuffle()
		var n := mini(MAX_REVIEWS, due_valid.size())
		for i in range(n):
			_session_items.append(due_valid[i])
	else:
		var new_items: Array = []
		for it in valid:
			if not Scheduler.has_schedule_entry(it.get("id", "")):
				new_items.append(it)
		if new_items.is_empty():
			new_items = valid.duplicate()
		new_items.shuffle()
		var n := mini(MAX_REVIEWS, new_items.size())
		for i in range(n):
			_session_items.append(new_items[i])
	_current_index = 0
	_review_count = 0
	_next_button.pressed.connect(_on_next_pressed)
	_conf_low_btn.pressed.connect(_set_confidence.bind(30))
	_conf_medium_btn.pressed.connect(_set_confidence.bind(60))
	_conf_high_btn.pressed.connect(_set_confidence.bind(90))
	_show_current_item()

func _set_confidence(value: int) -> void:
	_confidence = value

func _is_usable_item(it: Variant) -> bool:
	if it is not Dictionary:
		return false
	var opts = it.get("options", null)
	if opts is not Array or opts.is_empty():
		return false
	var ci = it.get("correct_index", -1)
	if typeof(ci) != TYPE_INT or ci < 0 or ci >= opts.size():
		return false
	return it.has("prompt") and it.has("explanation")

func _show_current_item() -> void:
	if _review_count >= MAX_REVIEWS:
		_prompt_label.text = "Session Complete"
		_options_box.visible = false
		_feedback_label.visible = false
		_next_button.visible = false
		return
	if _current_index >= _session_items.size():
		_prompt_label.text = "Session Complete"
		_options_box.visible = false
		_feedback_label.visible = false
		_next_button.visible = false
		return
	var item: Dictionary = _session_items[_current_index]
	var variant: String = Scheduler.get_ab_variant()
	_prompt_label.text = "Dagens mode: %s\n\n%s" % [variant, item.get("prompt", "")]
	_prompt_label.visible = true
	_options_box.visible = true
	_feedback_label.visible = false
	_next_button.visible = true
	_next_button.disabled = true
	for c in _options_box.get_children():
		c.queue_free()
	var options: Array = item.get("options", [])
	for i in range(options.size()):
		var btn := Button.new()
		btn.text = str(options[i])
		btn.pressed.connect(_on_option_pressed.bind(i))
		_options_box.add_child(btn)
	_feedback_label.text = ""

func _on_option_pressed(option_index: int) -> void:
	var item: Dictionary = _session_items[_current_index]
	var correct_index: int = item.get("correct_index", 0)
	var explanation: String = item.get("explanation", "")
	var correct: bool = (option_index == correct_index)
	var item_id: String = item.get("id", "")
	var lens: String = item.get("lens", "")
	var variant: String = Scheduler.get_ab_variant()
	Scheduler.record_review(item_id, correct)
	EventLog.append_attempt({
		"item_id": item_id,
		"correct": correct,
		"lens": lens,
		"variant": variant,
		"confidence": _confidence,
		"timestamp": int(Time.get_unix_time_from_system())
	})
	if not correct and _review_count + 1 < MAX_REVIEWS:
		_session_items.append(item)
	_feedback_label.text = ("Korrekt\n" if correct else "Forkert\n") + explanation
	_feedback_label.visible = true
	for c in _options_box.get_children():
		if c is Button:
			c.disabled = true
	_next_button.disabled = false

func _on_next_pressed() -> void:
	_review_count += 1
	_current_index += 1
	_show_current_item()

func _go_home() -> void:
	get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
