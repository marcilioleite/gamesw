function pause() {
	gameinfo.paused = true
	window.clearInterval(gameloop)
	window.clearInterval(timer)
}

function resume() {
	gameinfo.paused = false
	gameloop = window.setInterval(loop, 1000 / gameinfo.fps)
	timer = window.setInterval(startTimer, 1000)
}