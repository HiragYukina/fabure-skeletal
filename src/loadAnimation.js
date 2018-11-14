const AnimationAssets = require("./engin/animationAssets")

module.exports = (root) => {
    root.forEach(node => {
        AnimationAssets.registerAnimation([{
            duration: node.duration,
            frameRate: node.frameRate,
            playTimes: node.playTimes,
            name: node.name,
            bone: node.bone
        }])
    })
    console.log(AnimationAssets);

}