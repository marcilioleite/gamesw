var canvas = document.getElementById("game")
var graphics = canvas.getContext("2d")

var clock = null
var charas = new Array()

var gameinfo = {
	fps: 2,
	paused: false,
	elapsedTime: 0,
	selectedChara: null
}

function update() {
	
}

function draw() {
	graphics.clearRect(0, 0, canvas.width, canvas.height)
	for (var i = 0; i < charas.length; i++) {
		charas[i].draw()
	}
	if (clock) {clock.draw()}
}

function startTimer() {
	gameinfo.elapsedTime++
}

function loop() {
	update()
	draw()
}