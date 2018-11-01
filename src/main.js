let canvas
let ctx

//モジュール
const baseLine = require("./src/baseLine")
const openJson = require("./src/json")
const openPart = require("./src/part")

let init = () => {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")
/*
    canvas.addEventListener('mousedown', onDown, false)
    canvas.addEventListener('mousemove', onMove, false)
    canvas.addEventListener('mouseup', onUp, false)
    */
    baseLine(ctx)
}

window.addEventListener("DOMContentLoaded", init)