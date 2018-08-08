//読み込む
const {dialog} = require("electron").remote

module.exports = () => {
    const options = {
        title: "open File",
        properties: ["openFile"]
    }
    dialog.showOpenDialog(options, filenames => {
        loadImage(filenames)
    })
}