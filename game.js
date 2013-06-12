var sprite = null

function MouseDemo () {
    MouseDemo.superclass.constructor.apply(this, arguments)
    this.isMouseEnabled = true
    var s = cc.Director.sharedDirector.winSize
    
    sprite = new cc.Sprite({ url: 'character.png' })
    sprite.position = { x: 200, y: 200 }
    sprite.speed = 1
    this.addChild(sprite)
}

MouseDemo.inherit(cc.Layer, {
    mouseDown: function (event) {
    	p = event.locationInCanvas
    	var move = new cc.MoveTo({ duration: sprite.speed, position: new cc.Point(p.x, p.y)})
		sprite.runAction(move)
    },
})

function runDemo () {
    var director = cc.Director.sharedDirector
    director.attachInView(document.getElementById('cocos2d-demo'))
    director.displayFPS = true
    
    var scene = new cc.Scene
    scene.addChild(new MouseDemo)

    director.runWithScene(scene)
}
