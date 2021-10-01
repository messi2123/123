function AMABLE2 () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
}
function BROMISTA () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
}
function feliz2 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        `)
}
let AMABLE = 0
let LUZ = 0
let AGUA = 0
basic.forever(function () {
    let feliz = 0
    if (feliz <= 0) {
        basic.showString("(°-°)")
        basic.showString("NO ")
        basic.showString("HECHAR AGUA")
    }
    if (feliz <= 0) {
        basic.showString("._.")
        basic.showString("NO")
        basic.showString("MOVER A UN LUGAR SOLEADO")
    }
    if (feliz <= 0) {
        basic.showString(">_<")
        basic.showString("NO")
        basic.showString("ANIMARLA")
        basic.pause(2000)
        feliz2()
    } else {
        AMABLE()
    }
    if (AMABLE <= 0) {
        basic.showString("\"_\"")
        basic.showString("NO")
        basic.showString("MOVER A UN LUGAR CON LUZ")
    }
    if (AMABLE <= 0) {
        basic.showString("*_*")
        basic.showString("NO ")
        basic.showString("DARLE AGUA A LA PLANTA")
    }
    if (AMABLE <= 0) {
        basic.showString("°<°")
        basic.showString("NO")
    }
})
