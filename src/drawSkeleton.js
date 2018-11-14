  const Asset = require("./engin/assets")
  const drawImage = require("./drawImage")

  module.exports = drawSkeleton = (node) => {

      const image = Asset.images[node.name]
      if (image) {
          drawImage(image, node.position.x, node.position.y, node.rotate, node.scale.side, node.scale.vertical)
      }

      node.children.forEach(children => {
          drawSkeleton(children)
      })
  }