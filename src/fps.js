/**
 * 任意のフレームレートでの再生
 */
let requestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000.0 / 60.0)
        }
})()

let now = window.performance && (
    performance.now ||
    performance.mozNow ||
    performance.msNow ||
    performance.oNow ||
    performance.webkitNow)

const getTime = () => {
    return (now && now.call(performance)) || (new Data().getTime())
}

module.exports = (frameReat, duration) => {
    const startTime = getTime()
    let fps = frameReat
    let frameLength = duration
    if (frameLength === 0) {
        frameLength = 1
    }

    let updata = () => {
        const lastTime = getTime()
        const frame = Math.floor((lastTime - startTime) / (1000 / fps) % frameLength)
        return frame
    }
    return updata()
}