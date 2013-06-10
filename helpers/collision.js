/**
 * Detects if an object is at x, y coordinates.
 *  
 * @param {Object} obj object
 * @param {Object} x
 * @param {Object} y
 */
function objectAt(obj, x, y) {
	if (x >= obj.x && x <= obj.x + obj.width &&
	 	y >= obj.y && y <= obj.y + obj.height )
		return true
	return false
}
