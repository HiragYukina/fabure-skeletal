
const loadAnimation = require("./loadAnimarion")
const loadAllAnimationImages = require("./loadAnimarionImages")
const drawSkeleton = require("./drawSkeleton")

module.exports = () => {
    loadAnimation().then((root) => {
        return loadAllAnimationImages(root).then(() => {
            drawSkeleton(root)
        })
    })
}