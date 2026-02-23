extends Control
## Home-skærm: Forside for Videnskabsteori Arena.

@onready var _label: Label = $Label

func _ready() -> void:
	_label.text = "Videnskabsteori Arena\nDagens mode: %s" % Scheduler.get_ab_variant()
