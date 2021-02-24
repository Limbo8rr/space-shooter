let i: number;
let min_speed: number;
let max_speed: number;
let y_speed: number;
let upgrade_speed: number;
let interval: number;
let enemy_projectile_speed: number;
namespace SpriteKind {
    export const Upgrade = SpriteKind.create()
    export const badprojectile = SpriteKind.create()
}

scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff33ffffffffff333ff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff3f3fffffffff33f33ff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff3f3ffffffff33ffffff3ffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff3ff3fffffff3ffffffff3ffffff33fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff3f333333333ffff3fff3ffffff3fffffffff3fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3ffffffffff33fff3fff3fffff33fffffffff3fff33fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffff3ffffffffff33ff3ffff3fffff3ffffffffff3f33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff333ffffffff3ffffffff33fff3ffff3f333f3ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff3ffffffffff3ffffffff3fff3fffff33ffff3ffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff3ffffffffff3ffffff33ffff3fff3333ffff3ffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff33fffffffff3ff3333ffffff3ff3fff3ffff3ffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffff333ffffffff3fffffffffff3ffffff3ffff3ffffffffff3fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff3333fffff3ffffffffff3ffffffff3ffff33fff33fff3fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff33ffff3ffffffffff3ffffffff3fffff33333fffff3fff33fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff3ffff3ffffffffff3ffffffff3fffffffffffffff3333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff33ffff3ffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff3ffff3ffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
    fffffffffffffffff3ffff3ffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff33fffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff333ffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff33333333ffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff33fffffffffffff33ffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff33fffffffffffff3ffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff3ffffffffffff3ffffffff3ffffffff333333fffff3ffffffffffffffffffff333ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff33fffffffffff3ffffffff3fffffff3fffff3fffff3333fffffff3333333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff3ffffffffff3ffffffff33333f33ffffff3fff3333f33ffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff3ffffffffff3ffff3333fffff3fffffff3ff33ffffff3fffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff3fffffffff33333fff3ffff3ffffffff3f33ffffffff3ffffffffff3fffffffffffff3333333333fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3ffffffff3fffffff3fff3fffffffff3f3fffffffff33fffffffff3ffffffffffff3fffffffffffffff3333ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff3fffffff3fffffff3fff3fffffffff3f3ffffffffff3fffffffff3ffffffffffff3fffffffffff33333ff3ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff3ffffff3fffffff3fff3ffffffff3ff3ffffffffff3fffffffff3ffffffffffff3fffff33ffff333fff3fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff3ffffff3fffffff3fff33fffff33fff33fffffffff3fffffffff3ffffffffffff3fff33ffffff333ff33fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff33333333333ffffffff3ffffff3fffff33333ffffff3ffffffff33fffffffff3ffffffffffff3f333ffffffff3.33fffffffffffffffffffffffffffffff
    ffffffffffffffffff1ffffffffffffffffffffffffffffffffffff3ffffff3fffffffffffffffff33fffff33fffffffffff3fffffffffff3f3ffffffffff33fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffff33fffffffffffffffffff33333fffffffffffff3fffffffffff3ffffffffffff33fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffff3fffffffffff3fffffffffffff33ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffff3fffffffffffff333fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffffffff3fffffffffffff3ff33fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffff3ffffff33ffffff3fff33fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffff333fffff3ffffff3ffff333fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333ffffff3ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff333333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff3333ffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff333ff33ffff333fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff333fff33ffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff33fffff3f3fffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff3fffff33f3fffff3ffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff3fffff3fff3ffff3fffffffffffffffffffffff333ff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff33fffff3fff3fffff3fffffff3ffffffffffff333ffff3fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff3ffffff3fff33ffff3fffffff3ffffffffffff33fffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff3ffff33333333ffff3fffffff3fff3fffffffff33ffff3ffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff33ffff3fffff33ff33fffff3333333ffffffffff333ff3ff33fffff3fffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff3ffff3ffffff3ff3ffffffff33fff33ffffffffff3ff333ff3fff3333ffff3333fff33ff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff33fff3ffffff3333fffffffff3ff3333ffffffff33ff33fff3ff33fff3fff3ff33fff3333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff33f33ffffffff3ffffffffff3ff3333ffff33333fff3ffff3ff333f33fff3fff3f3333ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff33ffffffff33ffffffffffffffffffffffffffffff3fffffffff333ffff33f33ff33fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff3333333333ffffffffffffffffffffffffffffffffffffffffffffffffff33fffff3ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`)
for (i = 0; i < 1; i++) {
    pause(1000)
}
scene.setBackgroundImage(null)
game.showLongText("Score points by shooting enemies. Lose points if they get past you. Hit multiple enemies in a row to spawn a weapon upgrade box. There are 3 levels of upgraded weapons. If you lose a ship most things reset. Have Fun!", DialogLayout.Full)
let difficulty = game.ask("Press A for Easy mode", "or B for Hard mode.")
set_starfield()
let spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . 8 6 7 8 7 6 8 . . . . .
    . . . 7 8 6 7 8 7 6 8 7 . . . .
    . 7 7 8 6 7 7 8 7 7 6 8 7 7 . .
    . . . . . . 5 8 5 . . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setPosition(scene.screenWidth() / 2, scene.screenHeight())
controller.moveSprite(spacePlane, 200, 0)
spacePlane.setStayInScreen(true)
let missile_array = [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 2 . . . . . . . .
        . . . . . . . 2 . . . . . . . .
        . . . . . . . 2 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 2 . 2 . . . . . . .
        . . . . . . 2 . 2 . . . . . . .
        . . . . . . 2 . 2 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . 2 . 2 . 2 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `]
let upgrades_array = [img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . 2 2 f 2 2 f 2 f f f f 2 2 . .
    . 2 2 f 2 2 f 2 f 2 2 f 2 2 . .
    . 2 2 f 2 2 f 2 f 2 2 f 2 2 . .
    . 2 2 f 2 2 f 2 f f f f 2 2 . .
    . 2 2 f 2 2 f 2 f 2 2 2 2 2 . .
    . 2 2 f f f f 2 f 2 2 2 2 2 . .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 2 8 2 8 2 8 2 8 2 8 2 8 2 . .
        . 8 2 2 2 2 2 2 2 2 2 2 2 8 . .
        . 2 2 f 2 2 f 2 f f f f 2 2 . .
        . 8 2 f 2 2 f 2 f 2 2 f 2 8 . .
        . 2 2 f 2 2 f 2 f 2 2 f 2 2 . .
        . 8 2 f 2 2 f 2 f f f f 2 8 . .
        . 2 2 f 2 2 f 2 f 2 2 2 2 2 . .
        . 8 2 f f f f 2 f 2 2 2 2 8 . .
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . .
        . 8 2 8 2 8 2 8 2 8 2 8 2 8 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 5 8 5 8 5 8 5 8 5 8 5 8 5 . .
        . 8 2 2 2 2 2 2 2 2 2 2 2 8 . .
        . 5 2 f 2 2 f 2 f f f f 2 5 . .
        . 8 2 f 2 2 f 2 f 2 2 f 2 8 . .
        . 5 2 f 2 2 f 2 f 2 2 f 2 5 . .
        . 8 2 f 2 2 f 2 f f f f 2 8 . .
        . 5 2 f 2 2 f 2 f 2 2 2 2 5 . .
        . 8 2 f f f f 2 f 2 2 2 2 8 . .
        . 5 2 2 2 2 2 2 2 2 2 2 2 5 . .
        . 8 5 8 5 8 5 8 5 8 5 8 5 8 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `]
let missile_type = 0
let hit_streak = 0
let temp_dead_count = 0
let temp_killed_count = 0
let upgrade_level = 0
let kill_count = 0
let bonus_missiles = 0
let speed_mult = 0
let player_dead = false
let last_bogey_x = scene.screenWidth() / 2
if (difficulty == true) {
    min_speed = 5
    max_speed = 10
    y_speed = 20
    upgrade_speed = 20
    info.setLife(5)
    interval = 1500
    enemy_projectile_speed = 50
} else {
    min_speed = 30
    max_speed = 40
    y_speed = 50
    upgrade_speed = 50
    info.setLife(3)
    interval = 1000
    enemy_projectile_speed = 125
}

controller.A.repeatInterval = 300
controller.A.repeatDelay = 0
controller.A.onEvent(ControllerButtonEvent.Repeated, function on_a_pressed() {
    if (player_dead == true) {
        return
    }
    
    
    let missile = sprites.createProjectileFromSprite(missile_array[missile_type], spacePlane, 0, -200)
    if (missile_type == 3 && bonus_missiles % 3 == 1) {
        missile = sprites.createProjectileFromSprite(missile_array[1], spacePlane, 200, -200)
        missile = sprites.createProjectileFromSprite(missile_array[1], spacePlane, -200, -200)
        bonus_missiles += 1
    } else if (missile_type == 3) {
        bonus_missiles += 1
    }
    
})
function create_bogey() {
    
    let bogey = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 8 8 . . 8 8 . . . . .
        . . . . . 8 8 . . 8 8 . . . . .
        . . . . 8 . . . . . . 8 . . . .
        . . . 8 . . . . . . . . 8 . . .
        . . 8 . 6 6 6 6 6 6 6 6 . 8 . .
        . . . . 4 6 6 6 6 6 6 4 . . . .
        . . . . . 4 6 6 6 6 4 . . . . .
        . . . . . . 4 6 6 4 . . . . . .
        . . . . . . . 4 4 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(0, randint(min_speed + speed_mult, max_speed + speed_mult))
    bogey.setPosition(Math.constrain(randint(10, scene.screenWidth() - 10), Math.constrain(last_bogey_x - scene.screenWidth() / 4 - 10, 10, scene.screenWidth() - 10), Math.constrain(last_bogey_x + scene.screenWidth() / 4 + 10, 10, scene.screenWidth() - 10)), 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
    last_bogey_x = bogey.x
    if (missile_type > 0 && Math.percentChance(10 + speed_mult)) {
        if (bogey.x > scene.screenWidth() / 2) {
            bogey.vx = randint(-10, y_speed * -1)
        } else {
            bogey.vx = randint(10, y_speed)
        }
        
        bogey.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . a a . . a a . . . . .
            . . . . . a a . . a a . . . . .
            . . . . a . . . . . . a . . . .
            . . . a . . . . . . . . a . . .
            . . a . 2 2 2 2 2 2 2 2 . a . .
            . . . . 5 2 2 2 2 2 2 5 . . . .
            . . . . . 5 2 2 2 2 5 . . . . .
            . . . . . . 5 2 2 5 . . . . . .
            . . . . . . . 5 5 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    } else if (missile_type > 1 && Math.percentChance(10 + speed_mult / 2)) {
        bogey.x = Math.constrain(bogey.x, 26, scene.screenWidth() - 26)
        if (bogey.x > scene.screenWidth() / 2) {
            bogey.vx = -25.5
        } else {
            bogey.vx = 25.5
        }
        
        bogey.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . 8 8 . . 8 8 . . . . .
                . . . . . 8 5 . . 5 8 . . . . .
                . . . . 5 . . . . . . 5 . . . .
                . . . 8 . . . . . . . . 8 . . .
                . . 5 . 7 7 7 8 8 7 7 7 . 5 . .
                . . . . 2 7 7 7 7 7 7 2 . . . .
                . . . . . 5 7 7 7 7 5 . . . . .
                . . . . . . 2 7 7 2 . . . . . .
                . . . . . 8 . a a . 8 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `)
    }
    
}

game.onUpdateInterval(1000, function on_update_interval() {
    let i: number;
    let enemy_missile: Sprite;
    let enemy_array = sprites.allOfKind(SpriteKind.Enemy)
    for (i = 0; i < enemy_array.length; i++) {
        if (Math.abs(enemy_array[i].vx) == 25.5) {
            enemy_array[i].vx = enemy_array[i].vx * -1
        }
        
    }
    if (missile_type >= 2 && player_dead == false) {
        // shoot badprojectiles
        for (i = 0; i < enemy_array.length; i++) {
            if (enemy_array[i].y < scene.screenHeight() / 2 * 3 && Math.percentChance(1)) {
                enemy_missile = sprites.createProjectile(missile_array[0], 0, enemy_projectile_speed, SpriteKind.badprojectile, enemy_array[i])
            }
            
        }
    }
    
})
forever(function on_forever() {
    
    create_bogey()
    pause(interval)
    if (kill_count % 20 == 0 && kill_count != 0) {
        interval = Math.round(Math.constrain(interval * .9, 250, 1000))
    }
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    // player shoots enemy
    
    otherSprite.destroy(effects.fire, 50)
    sprite.destroy()
    info.changeScoreBy(2)
    kill_count += 1
    hit_streak += 1
    temp_killed_count += 1
    if ((hit_streak == 20 || hit_streak > 20 && hit_streak % 20 == 0) && missile_type == 0) {
        spawn_upgrade(0)
    }
    
    if ((hit_streak == 30 || hit_streak > 30 && hit_streak % 20 == 0) && missile_type == 1) {
        spawn_upgrade(1)
    }
    
    if ((hit_streak == 40 || hit_streak > 40 && hit_streak % 20 == 0) && missile_type == 2) {
        spawn_upgrade(2)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    let i: number;
    // player crashes into enemy
    
    if (player_dead == true) {
        return
    }
    
    player_dead = true
    // sprite.set_velocity(25, 25)
    sprite.startEffect(effects.disintegrate, 1000)
    otherSprite.destroy(effects.disintegrate, 1000)
    info.changeScoreBy(1)
    controller.moveSprite(sprite, 0, 0)
    scene.cameraShake(4, 1000)
    for (i = 0; i < 1; i++) {
        pause(1000)
    }
    sprite.setImage(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . 8 6 7 8 7 6 8 . . . . .
    . . . 7 8 6 7 8 7 6 8 7 . . . .
    . 7 7 8 6 7 7 8 7 7 6 8 7 7 . .
    . . . . . . 5 8 5 . . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `)
    let enemy_array = sprites.allOfKind(SpriteKind.Enemy)
    for (i = 0; i < enemy_array.length; i++) {
        info.changeScoreBy(1)
        enemy_array[i].destroy()
    }
    sprite.setPosition(scene.screenWidth() / 2, scene.screenHeight())
    controller.moveSprite(spacePlane, 200, 0)
    info.changeLifeBy(-1)
    player_dead = false
    missile_type = 0
    temp_dead_count = 0
    temp_killed_count = 0
    hit_streak = 0
    upgrade_level = 0
    last_bogey_x = scene.screenWidth() / 2
    kill_count = Math.round(kill_count / 2) - kill_count % 20 + 1
    interval = interval * 1.25
    speed_mult = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badprojectile, function on_overlap4(sprite: Sprite, otherSprite: Sprite) {
    let i: number;
    // player hit by enemy projectile
    
    if (player_dead == true) {
        return
    }
    
    player_dead = true
    // sprite.set_velocity(25, 25)
    sprite.startEffect(effects.disintegrate, 1000)
    otherSprite.destroy(effects.disintegrate, 1000)
    info.changeScoreBy(1)
    controller.moveSprite(sprite, 0, 0)
    scene.cameraShake(4, 1000)
    for (i = 0; i < 1; i++) {
        pause(1000)
    }
    sprite.setImage(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . . 8 6 8 6 8 . . . . . .
    . . . . 8 6 7 8 7 6 8 . . . . .
    . . . 7 8 6 7 8 7 6 8 7 . . . .
    . 7 7 8 6 7 7 8 7 7 6 8 7 7 . .
    . . . . . . 5 8 5 . . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `)
    let enemy_array = sprites.allOfKind(SpriteKind.Enemy)
    for (i = 0; i < enemy_array.length; i++) {
        info.changeScoreBy(1)
        enemy_array[i].destroy()
    }
    sprite.setPosition(scene.screenWidth() / 2, scene.screenHeight())
    controller.moveSprite(spacePlane, 200, 0)
    info.changeLifeBy(-1)
    player_dead = false
    missile_type = 0
    temp_dead_count = 0
    temp_killed_count = 0
    hit_streak = 0
    upgrade_level = 0
    last_bogey_x = scene.screenWidth() / 2
    kill_count = Math.round(kill_count / 2) - kill_count % 20 + 1
    interval = interval * 1.25
    speed_mult = 0
})
sprites.onDestroyed(SpriteKind.Enemy, function on_destroyed(sprite: Sprite) {
    
    info.changeScoreBy(-1)
    if (info.player1.score() < 0) {
        info.player1.setScore(0)
    }
    
    temp_dead_count += 1
    if (temp_dead_count > temp_killed_count) {
        temp_dead_count = 0
        temp_killed_count = 0
        hit_streak = 0
    }
    
})
game.onUpdate(function on_update() {
    let star: Sprite;
    if (Math.percentChance(25)) {
        // adds new stars to starfield
        star = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 1 . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 0, randint(20, 30))
        star.setPosition(randint(0, scene.screenWidth()), 0)
        star.setFlag(SpriteFlag.Ghost, true)
    }
    
})
function set_starfield() {
    let star: Sprite;
    for (let i = 0; i < 50; i++) {
        star = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 1 . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 0, randint(20, 30))
        star.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        star.setFlag(SpriteFlag.Ghost, true)
    }
}

function spawn_upgrade(num: number) {
    
    upgrade_level = num + 1
    let upgrade_box = sprites.create(upgrades_array[num], SpriteKind.Upgrade)
    upgrade_box.setVelocity(0, upgrade_speed)
    upgrade_box.setPosition(randint(10, scene.screenWidth() - 10), 0)
    upgrade_box.setFlag(SpriteFlag.AutoDestroy, true)
}

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Upgrade, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    // player shoots upgrade box
    
    otherSprite.destroy(effects.smiles, 250)
    missile_type = upgrade_level
    hit_streak = 0
    if (missile_type == 3) {
        speed_mult = 5 * Math.round(Math.constrain(kill_count / 20, 1, 10))
    }
    
})
