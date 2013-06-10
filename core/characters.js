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
});

var chara = new Character(10, 10, 139, 165, 'graphics/images/character.png')
charas.push(chara)
/*
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