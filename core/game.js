var canvas = document.getElementById("game")
var graphics = canvas.getContext("2d")

var gameinfo = {
	fps: 2,
	paused: false,
	elapsedTime: 0,
	meScore: 0,
	opponentScore: 0
}

function update() {
}

function draw() {
}

function startTimer() {
	gameinfo.elapsedTime++
}

function loop() {
	update()
	draw()
}