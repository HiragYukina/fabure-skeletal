const loadSkeleton = require("./loadSkeleton")
const loadAllSkeleton = require("./loadAllSkeleton")
const drawSkeleton = require("./drawSkeleton")
const loadAnimation = require("./loadAnimation")
const playerAnimation = require("./playerAnimation")

module.exports = () => {
    loadSkeleton().then((root) => {
        return loadAllSkeleton(root.skeleton).then(() => {
            drawSkeleton(root.skeleton)
            loadAnimation(root.animation)
            playerAnimation()
        })
    })
}