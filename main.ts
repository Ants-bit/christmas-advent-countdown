basic.forever(function () {
    game.setScore(0)
    for (let index = 0; index < 25; index++) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                # . . . #
                . # # # .
                `)
            music.playMelody("C E C5 G F A D G ", 120)
            game.addScore(1)
            game.startCountdown(86000000)
        }
    }
})
