music.setVolume(255)
basic.forever(function () {
    led.setBrightness(input.lightLevel())
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    music.playTone(input.lightLevel(), music.beat(BeatFraction.Half))
})
