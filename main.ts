function AMABLE2 () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    if (AMABLE <= 0) {
        basic.showString("[_](tiene sol)")
        basic.showString("NO")
        basic.showString(":%")
    }
    if (AMABLE <= 0) {
        basic.showString("°0°(tiene agua)")
        basic.showString("NO ")
        basic.showString("°_°")
    }
    if (AMABLE <= 0) {
        basic.showString(":[(la tratas bien)")
        basic.showString("NO")
        basic.showString(":)")
        BROMISTA()
    }
}
function BROMISTA () {
    let bromista = 0
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    if (bromista <= 0) {
        basic.showString("(!)(HACE REIR)")
        basic.showString("NO")
        basic.showString(":P")
    }
    if (bromista <= 0) {
        basic.showString(":D(cuenta chistes)")
        basic.showString("NO")
        basic.showString(":]")
    }
    if (bromista <= 0) {
        basic.showString(":[(hace reir)")
        basic.showString("NO")
        basic.showString(":V")
    }
}
function feliz2 () {
    let feliz = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        `)
    if (feliz <= 0) {
        basic.showString("[*+*](tiene agua)")
        basic.showString("NO ")
        basic.showString("#-#")
    }
    if (feliz <= 0) {
        basic.showString("*+*(tiene sol)")
        basic.showString("NO")
        basic.showString("*")
    }
    if (feliz <= 0) {
        basic.showString("(°)(va a jugar)")
        basic.showString("NO")
        basic.showString(":O")
        AMABLE2()
    }
}
let AMABLE = 0
AMABLE = 0
let LUZ = 0
let AGUA = 0
