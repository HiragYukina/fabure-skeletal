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

//アセットの管理ツール
const Aseet = {
    //登録済みアセット
    aseets: [],
    //画像リソース
    images: {},
    //効果音のリソース
    sounds: {}
}


/***
 * データの登録
 * 
 * @param {Array} aseets アセット情報配列
 */
Aseet.register = (aseets) => {
    if (aseets.constructor.name !== "Array") {
        console.warn("Aseet.register:アセット情報としてArray以外のパラメータが渡された" + aseets)
        return
    }
    Aseet.aseets = [...Aseet.aseets, ...aseets]
}


/***
 * JSONのファイルパスからのアセットデータの登録
 * 
 * @param {String} src JSONのファイルパス
 * @return {Promise}
 */
Aseet.registerByJsonFile = (src) => {
    return fetch(src).then(response => {
        return response.json()
    }).then(json => {
        Aseet.register(json)
    })
}


/**
 * アセットの読み込み
 * 
 * @param {String}　アセット名
 * @return {Promise}
 */
Aseet.load = (name) => {
    const aseet = Aseet.aseets.find(aseet => {
        return aseet.name === name
    })
    switch (aseet.type) {
        case "image":
            return Aseet.loadImage(aseet)
            break

        case "sound":
            return Aseet.loadSound(aseet)
            break
    }
}


/**
 * 画像の読み込み
 * 
 * @param {Object} aseet アセット情報
 * @return {Promise}
 */
Aseet.loadImage = (aseet) => {
    const image = new Image()
    image.src = aseet.src
    Aseet.images[aseet.name] = image

    return new Promise((resolve) => {
        image.onload = () => {
            resolve()
        }
    })
}


/**
 * 効果音の読み込み
 * 
 * @param {Object} aseet アセット情報
 * @return {Promise}
 */
Aseet.loadSound = (aseet) => {
    return fetch(aseet.src).then(response => {
        return response.arrayBuffer()
    }).then(sound => {
        Audio.ctx.decodeAudioData(sound, buffer => {
            Aseet.sounds[aseet.name] = buffer
        })
    })
}


/**
 * タグからのアセット読み込み
 * 
 * @param {String} tag 読み込むタグ
 * @return {Promise}
 */
Aseet.loadByTag = (tag) => {
    const aseets = Aseet.aseets.filter(aseet => {
        return aseet.tag.includes(tag)
    })

    return Promise.all(aseets.map((aseet) => {
        return Aseet.load(aseet.name)
    }))
}


/**
 * タグの配列からのアセット読み込み
 * 
 * @param {String} tags 読み込むタグの配列
 * @return {Promise}
 */
Aseet.loadByTags = (tags) => {
    return Promise.all(tags.map((tag) => {
        return Aseet.loadByTag(tag)
    }))
}


/**
 * 登録されている全てのアセットを読み込む
 * 
 * @return {Promise}
 */
Aseet.loadAll = () => {
    return Promise.all(Aseet.aseets.map((aseet) => {
        return Aseet.load(aseet.name)
    }))
}


/**
 * 読み込んだアセットの破棄
 */
Aseet.unload = (name) => {
    const aseet = Aseet.aseets.find(function (aseet) {
        return aseet.name === name
    })

    switch (aseet.type) {
        case "image":
            Aseet._unloadImage(aseet.name)
            break

        case "sound":
            Aseet._unloadSound(aseet.name)
            break
    }
}


/**
 * 画像アセットの破棄
 *
 * @param {String} name アセット名
 */
Aseet._unloadImage = function (name) {
    if (Aseet.images.hasOwnProperty(name)) {
        delete Aseet.images[name]
    }
}

/**
 * 音声アセットの破棄
 */
Aseet._unloadSound = function (name) {
    if (Aseet.sounds.hasOwnProperty(name)) {
        delete Aseet.sounds[name]
    }
}

module.exports = Aseet