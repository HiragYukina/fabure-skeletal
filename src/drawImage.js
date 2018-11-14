
module.exports = (image, x, y, angle, side, vertical) => {
    const radian = Math.PI / 180
    ctx.save()
    ctx.translate(x + image.width / 2, y + image.height / 2)
    ctx.rotate(angle * radian)
    ctx.drawImage(image, -(image.width / 2), -(image.height / 2), image.width * side, image.height * vertical)
    ctx.restore()
}