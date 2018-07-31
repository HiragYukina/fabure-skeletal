
let dragging = false
let choiceName

let onDown = e => {
    // キャンバスの左上端の座標を取得
    const offsetX = canvas.getBoundingClientRect().left
    const offsetY = canvas.getBoundingClientRect().top

    // マウスが押された座標を取得
    const x = e.clientX - offsetX
    const y = e.clientY - offsetY
      let c = 0
    // オブジェクト上の座標かどうかを判定
    images.forEach(image => {
        if (image.x < x && (image.x + Aseet.images[image.name].width) > x && image.y < y && (image.y + Aseet.images[image.name].height) > y) {
            dragging = true; // ドラッグ開始
            relX = image.x - x
            relY = image.y - y
            choiceName = image.name
        }
    })
}

let onMove = e => {
    // キャンバスの左上端の座標を取得
    var offsetX = canvas.getBoundingClientRect().left
    var offsetY = canvas.getBoundingClientRect().top

    // マウスが移動した先の座標を取得
    const x = e.clientX - offsetX
    const y = e.clientY - offsetY

    // ドラッグが開始されていればオブジェクトの座標を更新して再描画
    if (dragging) {
        images.forEach(image =>{
            if(image.name === choiceName){
                  image.x = x + relX
                  image.y = y + relY
                  drawRect()
            }
        })
    }
}

let onUp = e => {
    dragging = false // ドラッグ終了
}

