namespace SpriteKind {
    export const Car = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    mySprite.vx = -10
})
function generate_character () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d f d f d d . . . . . 
        . . . . d d d 5 d d d . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . d d d 1 1 1 d d d . . . . 
        . . d d d 1 1 1 1 1 d d d . . . 
        . d d d d 1 1 1 1 1 d d d d . . 
        . d d d d 1 1 1 1 1 d d d d . . 
        . d . d d 1 1 1 1 1 d d . d . . 
        . . . d d 1 1 1 1 1 d d . . . . 
        . . . . d d 1 1 1 d d . . . . . 
        . . . . 5 5 d d d 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(25, 88)
    controller.moveSprite(mySprite, 30, 30)
    scene.cameraFollowSprite(mySprite)
}
scene.onOverlapTile(SpriteKind.Player, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let myTile: tiles.Tile = null
let evil_penguin: Sprite = null
let mySprite: Sprite = null
scene.setTileMap(img`
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a . . . . . . a . . . . a . . a . . a . . . . a . . . . . . a 2 
    a . . . . . . a . . . . a . . a . . a a a a . a . a a a a a a 2 
    a . . . . . a a . . a . . . . a . . . . . . . a . a . . . . . 2 
    a . . a . . a . . a a a a . . a a a . a a . . . . a . a . . . 2 
    a . . a . . . . . . . a . . . . . . . a . . a a a a . a . . . 2 
    a . . a . . . . . . . a . . . . . . . a . . . . . . . a . . . 2 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    `)
scene.setTile(10, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 6 f 6 f 6 6 . . . . . 
    . . . . 6 6 6 5 6 6 6 . . . . . 
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . 6 6 6 1 1 1 6 6 6 . . . . 
    . . 6 6 6 1 1 1 1 1 6 6 6 . . . 
    . 6 6 6 6 1 1 1 1 1 6 6 6 6 . . 
    . 6 6 6 6 1 1 1 1 1 6 6 6 6 . . 
    . 6 . 6 6 1 1 1 1 1 6 6 . 6 . . 
    . . . 6 6 1 1 1 1 1 6 6 . . . . 
    . . . . 6 6 1 1 1 6 6 . . . . . 
    . . . . 5 5 6 6 6 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, true)
scene.getTile(1, 3).place(mySprite)
generate_character()
scene.setTile(2, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, false)
let column = 0
game.onUpdateInterval(1500, function () {
    for (let index = 0; index <= 7; index++) {
        evil_penguin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 3 2 3 2 2 . . . . . 
            . . . . 2 2 2 5 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . 2 2 2 1 1 1 2 2 2 . . . . 
            . . 2 2 2 1 1 1 1 1 2 2 2 . . . 
            . 2 2 2 2 1 1 1 1 1 2 2 2 2 . . 
            . 2 2 2 2 1 1 1 1 1 2 2 2 2 . . 
            . 2 . 2 2 1 1 1 1 1 2 2 . 2 . . 
            . . . 2 2 1 1 1 1 1 2 2 . . . . 
            . . . . 2 2 1 1 1 2 2 . . . . . 
            . . . . 5 5 2 2 2 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        evil_penguin.setFlag(SpriteFlag.AutoDestroy, true)
        myTile = scene.getTile(column, index)
        scene.place(myTile, evil_penguin)
    }
    column += 1
})
forever(function () {
    mySprite.y += -2
    pause(200)
    mySprite.y += 2
    pause(500)
})
