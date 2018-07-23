
let canvas
let ctx

let images = []

//モジュール
const openDialog = require("./src/dialog")
const Aseet = require("./src/engin/aseets")
const image = require("./src/image")

console.log(Aseet)


let msg = function(src){
    const data = new image(src)
    data.image.onload = () => {
        images.push(data)
        data.draw(ctx)
    }
}

let init = function () {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")

    canvas.addEventListener('mousedown', onDown, false)
    canvas.addEventListener('mousemove', onMove, false)
    canvas.addEventListener('mouseup', onUp, false)
    openDialog()
}

window.addEventListener("DOMContentLoaded",init)