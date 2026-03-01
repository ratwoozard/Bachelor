extends Control
## App-shell: Håndterer scene-skift og viser første skærm (HomeScreen).

@onready var _screen_container: Control = $ScreenContainer

func _ready() -> void:
	_show_screen("res://scenes/screens/HomeScreen.tscn")

func show_screen(scene_path: String) -> void:
	_show_screen(scene_path)

func _show_screen(scene_path: String) -> void:
	for c in _screen_container.get_children():
		c.queue_free()
	var packed: PackedScene = load(scene_path) as PackedScene
	if packed:
		var inst := packed.instantiate()
		_screen_container.add_child(inst)
