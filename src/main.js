
let canvas
let ctx

let images = []

//モジュール
const openDialog = require("./src/dialog")
const Aseet = require("./src/engin/aseets")
const image = require("./src/image")
const baseLine = require("./src/baseLine")

let msg = src =>{
   /* const data = new image(src)
    data.image.onload = () => {
        data.setPosition()
        images.push(data)
        drawRect()
    }*/
    loadImage(src)
}
function loadImage (src){
    const url = src[0].match(/(.*)(?:\.([^.]+$))/)[1]
    const filename = url.split("\\").pop()
/**
 * アセットデータ
 *
 * [
 *   {
 *     type: "アセット種類",
 *     name: "アセット名",
 *     src: "アセットのファイルパス",
 *     tag: ["タグ1", "タグ2", ...],
 *   },
 *   :
 * ]
 */
Aseet.register(
    [
        {
            type: "image",
            name: filename,
            src: src[0]
        }
    ]
)
Aseet.load(filename).then(()=>{

})
}


let init = () => {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")

    canvas.addEventListener('mousedown', onDown, false)
    canvas.addEventListener('mousemove', onMove, false)
    canvas.addEventListener('mouseup', onUp, false)
    baseLine(ctx)
    openDialog()
}

let drawRect = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // キャンバスをクリア
    baseLine(ctx)
    images.forEach(image => {
        image.draw(ctx)
    }, false)
}


window.addEventListener("DOMContentLoaded",init)