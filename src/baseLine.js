module.exports = ctx => {
    ctx.lineWidth = 0.5
    ctx.lineCap = "spuare"
    //X
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.moveTo(0, ctx.canvas.height / 2)
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2)
    ctx.stroke()
    //Y
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.moveTo(ctx.canvas.width / 2, 0)
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height)
    ctx.stroke()
}