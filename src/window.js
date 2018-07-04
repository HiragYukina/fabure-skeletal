const {
    app,
    BrowserWindow
} = require("electron")
const ipc = require("electron").ipcMain
const fs = require("fs")
let path = "" //初期化
let filePath = ""
let album = null
let index = 0
let regexp = /.*\.(jpg|jpeg|png|gif)$/i

let fileRead = function () {
    if (!album) {
        album = fs.readdirSync(path)
        album = album.filter(file => {
            return regexp.test(file)
        })
    }
    filePath = path + "/" + album[index]
    console.log(filePath);
    index += 1;
    if (index >= album.length) {
        index = 0
    }
}

let win = null

app.on("ready", () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile("./index.html")
    win.on("closed", () => {
        mainWindow = null
    })
})

ipc.on("mul-async",event => {
    fileRead()
    event.sender.send("mul-async-replay",filePath)
})

ipc.on("mul-async-dialog", (event,arg ) => {

    if(!arg){return}
    path = arg[0]
    album = 0
    fileRead()
    event.sender.send("mul-async-dialog-replay",filePath)
}
)


