
module.exports = class {

    /**
     * 画像のデータ
     * 
     *      name:"名前",
     *      x:"x座標",
     *      y:"y座標"
     * 
     */

    constructor(name) {
        this.name = name

        this.x = (canvas.width / 2) - Aseet.images[this.name].width / 2
        this.y = (canvas.height / 2) - Aseet.images[this.name].height / 2

    }

    draw(ctx) {
        ctx.drawImage(Aseet.images[this.name], this.x, this.y)
        
    }

    rotation(image,x,y){
        
    }

}