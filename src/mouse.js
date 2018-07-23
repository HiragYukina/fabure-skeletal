
let dragging = false
let a = 0

function onDown(e) {
    // キャンバスの左上端の座標を取得
    const offsetX = canvas.getBoundingClientRect().left
    const offsetY = canvas.getBoundingClientRect().top

    // マウスが押された座標を取得
    const x = e.clientX - offsetX
    const y = e.clientY - offsetY
      let c = 0
    // オブジェクト上の座標かどうかを判定
    images.forEach(image => {
        if (image.x < x && (image.x + image.image.width) > x && image.y < y && (image.y + image.image.height) > y) {
            dragging = true; // ドラッグ開始
            relX = image.x - x
            relY = image.y - y
            a = c
        }
        //クリックされたオブジェクト
        c++
    })
}

function onMove(e) {
    // キャンバスの左上端の座標を取得
    var offsetX = canvas.getBoundingClientRect().left
    var offsetY = canvas.getBoundingClientRect().top

    // マウスが移動した先の座標を取得
    const x = e.clientX - offsetX
    const y = e.clientY - offsetY

    // ドラッグが開始されていればオブジェクトの座標を更新して再描画
    if (dragging) {
        images[a].x = x + relX
        images[a].y = y + relY
        drawRect()
    }
}

function onUp(e) {
    dragging = false // ドラッグ終了
}

function drawRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // キャンバスをクリア
    images.forEach(image => {
        image.draw(ctx)
    }, false)
}