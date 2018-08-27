
const openDialog = require("./dialog")
const loadImage = require("./loadPartImages")
const drawImage = require("./drawPartImage")

module.exports = () => {
    openDialog(url => {
        loadImage(url,name=>{
            drawImage(name)
        })
    })
}
