/**
 * Game Clock
 * 
 * 	Game Clock to show timer. 
 * 
 * author: Marcilio Leite
 */
var Clock = Class.extend({
	/**
	 * Constructor
	 * 
	 * @param {Integer} x Clock's x
	 * @param {Integer} y Clock's y
	 */
	init: function(x, y) {
		this.x = x
		this.y = y
	},
	/**
	 * Draw Clock
	 *  
	 */
	draw: function() {
		graphics.font = "bold 30px Londrina Solid"
		var minutes = Math.floor(gameinfo.elapsedTime / 60)
			minutes = minutes > 9 ? minutes : "0"+minutes
		var seconds = gameinfo.elapsedTime - minutes * 60
			seconds = seconds > 9 ? seconds : "0"+seconds
		graphics.fillText(minutes + ":" + seconds, this.x, this.y)
	}	
})

/**
 * Game Character
 * 
 * 	A game base character type. 
 * 
 * author: Marcilio Leite
 */
var Character = Class.extend({
	/**
	 * Constructor 
	 *  
	 * @param {Integer} x Character's x
	 * @param {Integer} y Character's y
	 * @param {Integer} width Character's width
	 * @param {Integer} height Character's height
	 * @param {String} texture URI for Image file 
	 */
	init: function(x, y, width, height, texture) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.texture = new Image()
		this.texture.src = texture
	},
	/**
	 * Draw Character
	 *  
	 */
	draw: function() {
		graphics.drawImage(this.texture, this.x, this.y)
	},
	/**
	 * Moves to x, y coordinates
	 *  
	 */
	move: function(x, y) {
		throw "Not implemented Character.move"
	},
})


clock = new Clock(50, 50)

/*
var chara = new Character(100, 100, 139, 165, 'graphics/images/character.png')
charas.push(chara)
var Ninja = Character.extend({
	init: function() {
		this._super(false)
	},
	dance: function() {
		return this._super()
	},
	swingSword: function() {
		return true
	}
});*/