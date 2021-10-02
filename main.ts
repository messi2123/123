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
    let bromista = 0
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
    } else {
        feliz2()
    }
    if (AMABLE <= 0) {
        AMABLE2()
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
        basic.showString("tratarla bien")
        BROMISTA()
    }
    if (bromista <= 0) {
        basic.showString(":D")
        basic.showString("NO")
        basic.showString("CONTAR CHISTES")
    }
    if (bromista <= 0) {
        basic.showString(";)")
        basic.showString("NO")
        basic.showString("HACERLA REIR")
    }
    if (bromista <= 0) {
        basic.showString(":)")
        basic.showString("NO")
        basic.showString("HACER REIR A LOS DEMAS ")
    }
})
