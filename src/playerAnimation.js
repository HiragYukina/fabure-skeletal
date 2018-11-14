const AnimationAssets = require("./engin/animationAssets")
const Asset = require("./engin/assets")
const drawImage = require("./drawImage")
const baseLine = require("./baseLine")
const animationStrat = require("./animationStart")

module.exports = () => {
    AnimationAssets.animation.forEach(motion => {
        const player = document.querySelector("#animation")
        const action = document.createElement("button")
        action.type = "button"
        action.onclick = () => {
            motionSlect(motion.name)
        }
        action.textContent = motion.name
        player.appendChild(action)
    })

    let selectorMotion = null
    const motionSlect = (name) => {
        AnimationAssets.animation.forEach(motion => {
            if (motion.name === name) {
                animationSetUp(motion.name)
                selectorMotion = motion.name
            }
        });
    }

    const animationSetUp = (motionName) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        baseLine(ctx)

        AnimationAssets.animation.forEach(motion => {
            if (motion.name === motionName) {
                const frameRate = motion.frameRate
                const bone = motion.bone
                const duration = motion.duration
                const skeletons = AnimationAssets.skeleton

                bone.forEach(part => {
                    const Pname = part.name
                    const setUpTranslate = part.translateFrame[0]
                    const setUpRotate = part.roateFrame
                    skeletons.forEach(skeleton => {
                        if (skeleton.name === Pname) {
                            let x = setUpTranslate.x
                            if (x !== undefined) {
                                x = skeleton.position.x + x
                            } else {
                                x = skeleton.position.x
                            }
                            let y = setUpTranslate.y
                            if (y !== undefined) {
                                y = skeleton.position.y + y
                            } else {
                                y = skeleton.position.y
                            }
                            let rotate
                            if (setUpRotate !== undefined) {
                                rotae = skeleton.rotate + setUpRotate[0].rotate
                            } else {
                                rotae = skeleton.rotate
                            }

                            const image = Asset.images[Pname]
                            drawImage(image, x, y, rotate, 1, 1)
                        }
                    })
                })
                const startButton = document.querySelector("#start")
                startButton.onclick = () => {
                    animationStrat(motion)
                }
            }
        })
    }
}