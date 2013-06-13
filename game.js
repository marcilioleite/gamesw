var sprite = null

function MouseDemo () {
    MouseDemo.superclass.constructor.apply(this, arguments)
    this.isMouseEnabled = true
    var s = cc.Director.sharedDirector.winSize
    
    sprite = new cc.Sprite({ url: 'character.png' })
    sprite.position = { x: 200, y: 200 }
    sprite.speed = 100
    this.addChild(sprite)
}

MouseDemo.inherit(cc.Layer, {
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
    director.displayFPS = false
    
    var scene = new cc.Scene
    scene.addChild(new MouseDemo)

    director.runWithScene(scene)
}
