
const Asset = require("./engin/assets")

/**
 * ツリーデータで使用している画像をすべて読み込む
 */
module.exports = (root) => {
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