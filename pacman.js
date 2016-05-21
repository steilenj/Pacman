// JS
var version = "0.0.1"       // Um zu wissen bei welcher Version man ist

init();
function init()				// Funktion zum laden von z.B. Bildern
{
	background_canvas = document.getElementById("background_canvas");
	background_ctx = main_canvas.getContext('2d');								// initialisiert canvas
	main_canvas = document.getElementById("main_canvas");
	main_ctx = main_canvas.getContext('2d');
}

function mouse(e)
{
	var x = e.pageX - document.getElementById("game_object").offsetLeft;
	var y = e.pageY - document.getElementById("game_object").offsetTop;
	document.getElementById("x").innerHTML = x;
	document.getElementById("y").innerHTML = y;
}