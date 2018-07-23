
module.exports = class {

    constructor(src) {
        this.image = new Image
        this.image.src = src
        this.x = (canvas.width / 2) - this.image.width / 2
        this.y = (canvas.height / 2) - this.image.height / 2
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y)
    }

    rotation(image,x,y){
        
    }

}