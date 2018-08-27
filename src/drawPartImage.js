

module.exports = (name) => {
    const x = canvas.width / 2 - Asset.images[name].width / 2
    const y = canvas.height / 2 - Asset.images[name].height / 2
    ctx.drawImage(Asset.images[name], x, y)
}