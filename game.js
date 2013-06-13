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
	var money = "$ "+gameData.money.toString()
	gui.moneyLabel.string = money
}

function ticTac() {
	gameData.time++
	var minutes = Math.floor(gameData.time / 60)
		minutes = minutes < 10 ? "0"+minutes : minutes  
	var seconds = gameData.time - minutes * 60
		seconds = seconds < 10 ? "0"+seconds : seconds
		
	gui.timeLabel.string = minutes + ":" + seconds
}

function PirateBay () {
    PirateBay.superclass.constructor.apply(this, arguments)
    this.isMouseEnabled = true
    var s = cc.Director.sharedDirector.winSize

    gui.timeLabel = new cc.Label({
    	string: "00:00",
    	fontName: 'Londrina Solid',
    	fontSize: 30 
    })
    gui.timeLabel.position = new cc.Point(s.width - 100, s.height - 50)
        
    gui.moneyLabel = new cc.Label({
    	string: "$ 0",
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
