extends Control
## Indstillinger.

func _ready() -> void:
	$Margin/VBox/TilbageBtn.pressed.connect(_go_home)

func _go_home() -> void:
	get_tree().current_scene.show_screen("res://scenes/screens/HomeScreen.tscn")
