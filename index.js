const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click" ,logValue)

let inputNumber = document.getElementById("input-number")

let lengthEl = document.getElementById("length-conversion")
let VolumeEl = document.getElementById("volume-conversion")
let MassEl = document.getElementById("mass-conversion")

function logValue() {
    console.log("button clicked")
    console.log(inputNumber.value)

    getLength()
    getVolume()
    getMass()
}

function getLength() {
    let meterToFeet = inputNumber.value * 3.28084
    meterToFeet = meterToFeet.toFixed(3)
    let feetToMeter = inputNumber.value / 3.28084
    feetToMeter = feetToMeter.toFixed(3)
    lengthEl.textContent = `${inputNumber.value} meters = ${meterToFeet} feet | ${inputNumber.value} feet = ${feetToMeter} meters`

}

function getVolume() {
    let litersToGallons = inputNumber.value * 0.264172
    litersToGallons = litersToGallons.toFixed(3)
    let GallonsToLiters = inputNumber.value / 0.264172
    GallonsToLiters = GallonsToLiters.toFixed(3)
    VolumeEl.textContent = `${inputNumber.value} liters = ${litersToGallons} gallons | ${inputNumber.value} gallons = ${GallonsToLiters} liters`

}

function getMass() {
    let kilosToPounds = inputNumber.value * 2.20462
    kilosToPounds = kilosToPounds.toFixed(3)
    let poundsToKilos = inputNumber.value / 2.20462
    poundsToKilos = poundsToKilos.toFixed(3)
    MassEl.textContent = `${inputNumber.value} kilos = ${kilosToPounds} pounds | ${inputNumber.value} pounds = ${poundsToKilos} kilos`

}