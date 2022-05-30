function RotIzq (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
function RotDer (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function InvIzq (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, Velocidad)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function InvDer (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, Velocidad)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function GiroIzq (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, Velocidad)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Parar () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function backward (vel: number) {
    pins.analogWritePin(AnalogPin.P1, Math.round(vel * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, Math.round(vel * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function GiroDer (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, Velocidad)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function forward (Velocidad: number) {
    pins.analogWritePin(AnalogPin.P1, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, Math.round(Velocidad * 1023 / 100))
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
radio.setGroup(1)
basic.forever(function () {
    for (let vel = 0; vel <= 100; vel++) {
        forward(vel)
        radio.sendNumber(vel)
        basic.pause(5000)
    }
})
