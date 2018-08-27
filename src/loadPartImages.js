const Asset = require("./engin/assets")

const selectFilename = (path) => {
    const url = path.match(/(.*)(?:\.([^.]+$))/)[1]
    return url.split("\\").pop()
}

module.exports = (src,callback) => {
    const filename = selectFilename(src)
    /**
     * アセットデータ
     *
     * [
     *   {
     *     type: "アセット種類",
     *     name: "アセット名",
     *     src: "アセットのファイルパス",
     *     tag: ["タグ1", "タグ2", ...],
     *   },
     *   :
     * ]
     */
    Asset.register(
        [{
            type: "image",
            name: filename,
            src: src
        }]
    )
    Asset.load(filename).then(() => {
        callback(filename)
    })
}