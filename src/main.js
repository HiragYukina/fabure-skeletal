
let canvas
let ctx

let images =[]
/**
 * 1画像のデータ
 * 
 * [
 *  {
 *      name:"名前",
 *      x:"x座標",
 *      y:"y座標"
 *  }
 * ]
 */

//モジュール
const openDialog = require("./src/dialog")
const Aseet = require("./src/engin/aseets")
const classImage = require("./src/image")
const baseLine = require("./src/baseLine")


let loadImage = src => {
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
    data = new classImage(filename)
    images.push(data)
    drawRect()
})
}


let init = () => {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")
    
    canvas.addEventListener('mousedown', onDown, false)
    canvas.addEventListener('mousemove', onMove, false)
    canvas.addEventListener('mouseup', onUp, false)
    baseLine(ctx)

    drawSkeleton()

    //openDialog()
}

let drawRect = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // キャンバスをクリア
    baseLine(ctx)
    images.forEach(image => {
        image.draw(ctx)
    }, false)
}
//ボーン
let bones = []

class Bone{
    constructor(id){
        this.id = id    
        this.children  //子供情報
        this.sibling    //兄妹情報
    }
    
}
let boneList = () => {
    //ボーンの確保
    for (let i = 0; i <= 5; i++) {
        const bone = new Bone(i)
        bones.push(bone)
    }
    //関係を手動で入力
}


let root ={
    name:"face",
    src:"images/face.png",
    position:{
        x:190,
        y:100
    },
    rotate:0,
    scale:{
        side:1,
        vertical:1
    },
    children:[{
        name:"body",
        src:"images/body.png",
        position:{
            x:200,
            y:164
        },
        rotate:0,
        scale:{
            side:1,
            vertical:1
        },
        children:[{
            name:"rightArm",
            src:"images/arm.png",
            position:{
                x:200-32,
                y:164+10
            },
            rotate:45,
            scale:{
                side:1,
                vertical:1
            },
            children:[]
        },
        {
            name:"rightLeg",
            src:"images/arm.png",
            position:{
                x:200,
                y:240
            },
            rotate:0,
            scale:{
                side:1,
                vertical:1
            },
            children:[]
        },
        {
            name:"leftArm",
            src: "images/arm.png",
            position:{
                x:200+46,
                y:164+10
            },
            rotate: -45,
            scale: {
                side: 1,
                vertical: 1
            },
            children: []
        },
        {
            name:"leftLeg",
            src:"images/arm.png",
            position:{
                x:200+20,
                y:244
            },
            rotate:0,
            scale: {
                side: 1,
                vertical: 1
            },
            children: []        
        }]
    }]
}

let read =(filename,src)=>{
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
            src: src
        }
    ]
)
Aseet.load(filename).then(() => {
    images.forEach(image => {
        rotation(image.position.x, image.position.y-20, image.rotate, Aseet.images[image.name])
    })
})

}



let rotation = (x,y,angle,image) =>{
    const radian = Math.PI / 180
    ctx.save()
    ctx.translate(x + image.width / 2, y + image.height / 2)
    ctx.rotate(angle * radian)
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2))
    ctx.restore()
            

}

let drawSkeleton =()=>{
    
    /*
    //親
   read(root.name, root.src)
   images.push(root)
   //子供関係
   let v= root.children
    for (let  i= 0;  i< v.length; i++) {
       //兄妹関係
       for (let l = 0; l < v.length; l++) {  
            read(v[l].name,v[l].src)
            images.push(v[l])
        }
        v = v[i].children
    }
    */
}


window.addEventListener("DOMContentLoaded",init)