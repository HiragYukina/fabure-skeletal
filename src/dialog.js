//読み込む
const {dialog} = require("electron").remote

module.exports = f => {
    const options = {
        title: "open File",
        properties: ["openFile"]
    }
    dialog.showOpenDialog(options, filenames => {  
        f(filenames[0])
    })
}