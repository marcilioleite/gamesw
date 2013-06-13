var gameData = {
	time: 	0,
	money: 	0
}

var gui = {
	timeLabel:	null,
	moneyLabel: null
}

var sprite = null

function yield() {
	gameData.money += 10
	gui.moneyLabel.string = gameData.money.toString()
}

function ticTac() {
	gameData.time++
	gui.timeLabel.string = gameData.time.toString()
}

function PirateBay () {
    PirateBay.superclass.constructor.apply(this, arguments)
    this.isMouseEnabled = true
    var s = cc.Director.sharedDirector.winSize

    gui.timeLabel = new cc.Label({
    	string: gameData.time.toString(),
    	fontName: 'Londrina Solid',
    	fontSize: 30 
    })
    gui.timeLabel.position = new cc.Point(50, 100)
        
    gui.moneyLabel = new cc.Label({
    	string: gameData.money.toString(),
    	fontName: 'Londrina Solid',
    	fontSize: 30 
    })
    gui.moneyLabel.position = new cc.Point(100, 100)
    
    sprite = new cc.Sprite({ 
    	url: 'grossini.png'
    })
    sprite.position = { x: 200, y: 200 }
    sprite.speed = 101
    
    this.schedule({
    	method: yield, 
    	interval: 10
    })
    this.schedule({
    	method: ticTac, 
    	interval: 1
    })
    this.addChild(gui.timeLabel)
	this.addChild(gui.moneyLabel) 
    this.addChild(sprite)
}

PirateBay.inherit(cc.Layer, {
    mouseDown: function (event) {
    	start = sprite.position
    	target = event.locationInCanvas
    	var distance = Math.sqrt(Math.pow(target.x - start.x, 2) + Math.pow(target.y - start.y,2))
    	var duration = distance / sprite.speed
    	var move = new cc.MoveTo({ duration: duration, position: new cc.Point(target.x, target.y)})
		sprite.runAction(move)
    },
})

function runDemo () {
    var director = cc.Director.sharedDirector
    director.attachInView(document.getElementById('cocos2d-demo'))
    director.displayFPS = true
    var scene = new cc.Scene
    scene.addChild(new PirateBay)

    director.runWithScene(scene)
}
