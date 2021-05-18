namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const furnature = SpriteKind.create()
    export const item = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
        tiles.setTilemap(tilemap`level2`)
        pause(100)
        me.setPosition(108, 22)
        game.showLongText("one key done 2 to go", DialogLayout.Bottom)
        game.showLongText("next is the blue door", DialogLayout.Bottom)
    }
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
        tiles.setTilemap(tilemap`level2`)
        pause(100)
        me.setPosition(108, 22)
        game.showLongText("2 keys done 1 to go", DialogLayout.Bottom)
        mySprite.destroy()
        mySprite3.destroy()
        mySprite2.destroy()
    }
    if (true) {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (me.overlapsWith(girl_1)) {
        game.splash("oh thank goodnes", "help has arrived")
        game.splash("I was worried that", "you were not coming")
        game.splash("now walk over to the ", "door and press A")
        tiles.setTilemap(tilemap`level5`)
    }
    if (me.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        girl_1.destroy()
        pause(100)
        tiles.setTilemap(tilemap`level2`)
        me.setPosition(108, 22)
        game.showLongText("oh no that girl tricked you ", DialogLayout.Bottom)
        game.showLongText("your trapped", DialogLayout.Bottom)
        game.showLongText("maybe go through the purple door", DialogLayout.Bottom)
    }
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        pause(100)
        tiles.setTilemap(tilemap`level7`)
        me.setPosition(16, 8)
        game.showLongText("a maze, get through the maze to get to the first key", DialogLayout.Bottom)
        game.showLongText("don't fall in the lava", DialogLayout.Bottom)
        game.showLongText("when you find the door press the B button", DialogLayout.Bottom)
    }
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        pause(100)
        tiles.setTilemap(tilemap`level12`)
        me.setPosition(0, 0)
        game.showLongText("a forest maze get  through it and don't let anyone see you", DialogLayout.Bottom)
        game.showLongText("when you get to the door press B", DialogLayout.Bottom)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            e f e 4 d b b d d e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 1 1 1 b f 4 e 
            . . e e f 6 6 6 6 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `, SpriteKind.Enemy)
        mySprite.setPosition(42, 61)
        mySprite3 = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.Enemy)
        mySprite3.setPosition(114, 60)
        mySprite2 = sprites.create(img`
            . . . . . . . c c c . . . . . . 
            . . . . . . c b 5 c . . . . . . 
            . . . . c c c 5 5 c c c . . . . 
            . . c c b c 5 5 5 5 c c c c . . 
            . c b b 5 b 5 5 5 5 b 5 b b c . 
            . c b 5 5 b b 5 5 b b 5 5 b c . 
            . . f 5 5 5 b b b b 5 5 5 c . . 
            . . f f 5 5 5 5 5 5 5 5 f f . . 
            . . f f f b f e e f b f f f . . 
            . . f f f 1 f b b f 1 f f f . . 
            . . . f f b b b b b b f f . . . 
            . . . e e f e e e e f e e . . . 
            . . e b c b 5 b b 5 b f b e . . 
            . . e e f 5 5 5 5 5 5 f e e . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . . f f f f f f . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.setPosition(128, 84)
    }
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        game.splash("this is currently not in", "the game it will be added")
    }
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    me.startEffect(effects.confetti)
})
info.onLifeZero(function () {
    scene.cameraShake(8, 200)
    game.over(false, effects.melt)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let girl_1: Sprite = null
let me: Sprite = null
me = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f 9 c c c c 9 f f f f 
    f f f c 6 c c c c 6 c f f f 
    . f 6 6 c c c c c c 6 6 f . 
    . f c c c c d d c c c c f . 
    . f f c c d d d d c c f f . 
    . f f f b f d d f b f f f . 
    . f f d 1 f d d f 1 d f f . 
    . . f f d d d d d d f f . . 
    . . e f e d f f d e f e . . 
    . e d f 6 9 9 9 9 6 f d e . 
    . d d 6 9 9 9 9 9 9 6 d d . 
    . d d f 6 6 6 6 6 6 f d d . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
me.setPosition(19, 29)
controller.moveSprite(me)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(me)
info.setLife(5)
info.setScore(0)
girl_1 = sprites.create(img`
    .fff.ffff.fff...................
    fffffccccfffff..................
    ffffbccccbffff..................
    fffc3cccc3cfff..................
    .f33cccccc33f...................
    .fccccddccccf...................
    .ffccddddccff...................
    .fffbfddfbfff...................
    .ffd1fddf1dff...................
    ..ffddddddff....................
    ..efeddddefe....................
    .edfb3333bfde...................
    .ddf333333cdd...................
    .ddd666666fdd...................
    ....ffffff......................
    ....ff..ff......................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
girl_1.setPosition(170, 41)
game.splash("oh good your here!")
game.splash("something has happened", "we need your help")
game.showLongText("walk over to the girl and press the A button to talk to her", DialogLayout.Bottom)
forever(function () {
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        info.changeScoreBy(1)
        pause(10000)
    }
    if (me.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
        info.changeScoreBy(1)
        pause(10000)
        info.setLife(5)
    }
    if (me.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1)) {
        info.changeLifeBy(-1)
        me.setPosition(18, 9)
    }
    if (info.score() == 100) {
        effects.confetti.startScreenEffect(5000)
        game.over(true)
    }
})
