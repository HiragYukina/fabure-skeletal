let canvas
let ctx

//モジュール
const openDialog = require("./src/dialog")
const Asset = require("./src/engin/aseets")
const baseLine = require("./src/baseLine")
const root = require("./src/root")

let init = () => {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")

    canvas.addEventListener('mousedown', onDown, false)
    canvas.addEventListener('mousemove', onMove, false)
    canvas.addEventListener('mouseup', onUp, false)
    baseLine(ctx)

    // 試しに固定データから読み込み
    loadAnimation().then((root) => {
        return loadAllAnimationImages(root)
    }).then(() => {
        drawSkeleton(root)
    })
}


const drawImage = (name) =>{
    console.log(Asset.images[name]);
    
    const x = canvas.width / 2 - Asset.images[name].width / 2
    const y = canvas.height / 2 - Asset.images[name].height / 2
    ctx.drawImage(Asset.images[name], x , y)
}

const selectFilename = (path) => {
    const url = path[0].match(/(.*)(?:\.([^.]+$))/)[1]
    return url.split("\\").pop()
}

let loadImage = src => {
    const filename = selectFilename(src)
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
    Asset.register(
        [{
            type: "image",
            name: filename,
            src: src
        }]
    )
    Asset.load(filename).then(()=>{
        drawImage(filename)
    })
}

/**
 * アニメーションデータの読み込み
 */
const loadAnimation = () => {
    // TODO: ダイアログからファイルを選ぶ
    return new Promise((resolve) => {
        resolve(root)
    })
}
/**
 * ツリーデータで使用している画像をすべて読み込む
 */
const loadAllAnimationImages = (root) => {
    const registerNodeImages = (node) => {
        Asset.register([{
            type: "image",
            name: node.src,
            src: node.src
        }])
        node.children.forEach(registerNodeImages)
    }
    registerNodeImages(root)
    return Asset.loadAll()
}

let drawNode = (x, y, angle, image) => {
    const radian = Math.PI / 180
    ctx.save()
    ctx.translate(x + image.width / 2, y + image.height / 2)
    ctx.rotate(angle * radian)
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2))
    ctx.restore()
}

let drawSkeleton = (node) => {

    const image = Asset.images[node.src]
    if (image) {
        drawNode(node.position.x, node.position.y, node.rotate, image)
    }

    node.children.forEach(children => {
        drawSkeleton(children)
    })
}



window.addEventListener("DOMContentLoaded", init)