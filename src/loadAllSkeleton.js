const Asset = require("./engin/assets")
const AnimationAssets = require("./engin/animationAssets")


module.exports = (root) => {
    /**
     * ツリーデータで使用している画像をすべて読み込む
     */
    const registerNodeImages = (node) => {
        Asset.register([{
            type: "image",
            name: node.name,
            src: node.src
        }])
        node.children.forEach(registerNodeImages)
    }

    //スケルトン情報を登録
    const registerNodeSkeleton = (node) => {
        let childrenName = []
        node.children.forEach(parent => {
            childrenName.push(parent.name)
        })
        AnimationAssets.registerSkeleton([{
            name: node.name,
            src: node.src,
            position: {
                x: node.position.x,
                y: node.position.y
            },
            rotate: node.rotate,
            scale: {
                side: node.scale.side,
                vertical: node.scale.vertical
            },
            children: childrenName

        }])
        node.children.forEach(registerNodeSkeleton)
    }
    registerNodeImages(root)
    registerNodeSkeleton(root)
    return Asset.loadAll()
}