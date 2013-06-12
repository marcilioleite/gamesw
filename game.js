function MouseDemo () {
    MouseDemo.superclass.constructor.apply(this, arguments)

    // Enable mouse support
    this.isMouseEnabled = true

    var label = new cc.Label({ string: 'Click the canvas', fontName: 'Londrina Solid', fontSize: 26 })

    var s = cc.Director.sharedDirector.winSize
    label.position = new cc.Point(s.width / 2, s.height - 50)

    var sprite = new cc.Sprite({ url: 'character.png' })
    sprite.position = { x: 200, y: 200 }
    this.addChild(sprite)

	var move = new cc.MoveTo({ duration:2, position: new cc.Point(100, 100)})
	sprite.runAction(move)

    this.addChild({child: label, z: 10})
}

MouseDemo.inherit(cc.Layer, {
    mouseDown: function (event) {
    	console.log(event.locationInCanvas)
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
