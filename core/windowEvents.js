window.onblur = function() {
	pause()
}

document.onkeypress = function(key) {
	var key = window.event || key
	
	if (key.charCode == 32) {
		if (gameinfo.paused) {
			resume()
		} else {
			pause()
		}
	}
}