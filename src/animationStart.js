const AnimationAssets = require("./engin/animationAssets")
const Asset = require("./engin/assets")
const drawImage = require("./drawImage")
const baseLine = require("./baseLine")
const AnimationFrame = require("./fps")

module.exports = (motion) => {
    const skeleton = AnimationAssets.skeleton
    //const duration = motion.duration
    const frameRate = motion.frameRate
    let x = 0
    let y = 0
    let i = 0

    const updata = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        baseLine(ctx)
        motion.bone.forEach(bone => {
            const translate = bone.translateFrame[i]
            let frames = translate.duration
            if (frames === 0) {
                frames = 1
            }
            const sx = translate.x / frames
            const duration = translate.duration
            const frame = AnimationFrame(frameRate, duration)
            if (frame === duration) {
                i++
            }

            x += sx * (frame + 1)

            const image = Asset.images[bone.name]
            drawImage(image, x, y, 0, 1, 1)
            console.log(x, y);

        })
    }
    requestAnimationFrame(updata)
}