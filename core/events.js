function pause() {
	gameinfo.paused = true
	window.clearInterval(gameloop)
}

function resume() {
	gameinfo.paused = false
	gameloop = window.setInterval(loop, 1000 / gameinfo.fps)
}