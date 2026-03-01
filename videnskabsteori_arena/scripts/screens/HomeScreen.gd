extends Control
## Home-skærm: Forside for Videnskabsteori Arena.

@onready var _subtitle: Label = $Margin/VBox/Subtitle
@onready var _lektioner_btn: Button = $Margin/VBox/LektionerBtn
@onready var _arena_btn: Button = $Margin/VBox/ArenaBtn
@onready var _statistik_btn: Button = $Margin/VBox/StatistikBtn
@onready var _indstillinger_btn: Button = $Margin/VBox/IndstillingerBtn

func _ready() -> void:
	_subtitle.text = "Dagens mode: %s" % Scheduler.get_ab_variant()
	_lektioner_btn.pressed.connect(_go_to_lessons)
	_arena_btn.pressed.connect(_go_to_arena)
	_statistik_btn.pressed.connect(_go_to_stats)
	_indstillinger_btn.pressed.connect(_go_to_settings)

func _get_app() -> Node:
	return get_tree().current_scene

func _go_to_lessons() -> void:
	_get_app().show_screen("res://scenes/screens/LessonScreen.tscn")

func _go_to_arena() -> void:
	_get_app().show_screen("res://scenes/screens/ArenaScreen.tscn")

func _go_to_stats() -> void:
	_get_app().show_screen("res://scenes/screens/StatsScreen.tscn")

func _go_to_settings() -> void:
	_get_app().show_screen("res://scenes/screens/SettingsScreen.tscn")
