window.onblur = function() {
	pause()
}

document.onclick = function(mouse) {
	var mouse = window.event || mouse
	var x = mouse.clientX - canvas.offsetLeft
    var y = mouse.clientY - canvas.offsetTop
    
    for (var i = 0; i < charas.length; i++) {
    	if (!objectAt(charas[i], x, y)) {
			charas[i].move(x, y)
    	}
    }
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