  const Asset = require("./engin/assets")

  let drawNode = (x, y, angle, image) => {
      const radian = Math.PI / 180
      ctx.save()
      ctx.translate(x + image.width / 2, y + image.height / 2)
      ctx.rotate(angle * radian)
      ctx.drawImage(image, -(image.width / 2), -(image.height / 2))
      ctx.restore()
  }

  module.exports = drawSkeleton = (node) => {

      const image = Asset.images[node.src]
      if (image) {
          drawNode(node.position.x, node.position.y, node.rotate, image)
      }

      node.children.forEach(children => {
          drawSkeleton(children)
      })
  }