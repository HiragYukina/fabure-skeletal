/**
 * スケルトン情報
 * [
 *  {
 *      name:"パーツの名前",
 *      src:"画像のソース",
 *      position:{x:"x座標",y:"ｙ座標"},
 *      rotate:"回転",
 *      scale: {side:"横倍率",vertical:"縦倍率" }
 *  }
 * ]
 */

/**
 * アニメーションデータ
 * 
 * [
 *  {
 *      duration:"フレーム数",
 *      frameRate: "フレームレート" ,
 *      playTimes:"開始フレーム",
 *      name:"モーションの名前",
 *      bone:[
 *             {
 *              name:"パーツの名前",
 *              座標移動
 *              translateFrame:[
 *                              {
 *                                  duration: "フレーム数",
 *                                 x: "x座標",
 *                                 y: "y座標",
 *                                 Easingtween: "変化の仕方"
 *                               }
 *                              ],
 *              回転
 *              rotateFrame:[
 *                           {
 *                            duration:"フレーム数",
 *                            tweenEasing:"変化の仕方",
 *                            rotate:"回転量"
 *                           }
 *                          ],
 *              scaleFrame:[
 *                          {duration:"フレーム数", w:"横倍率",h:"縦倍率"}
 *                         ]
 *              }
 *            ]
 *  }
 * ]
 */

const Asset = {
    skeleton: [],
    //スケルトン情報
    animation: [],
    //アニメーションデータ
    parent: []
    //親子関係

}
//スケルトン情報の登録
Asset.registerSkeleton = (assets) => {
    if (assets.constructor.name !== "Array") {
        console.warn("Asset.register:アセット情報としてArray以外のパラメータが渡された" + assets)
        return
    }
    Asset.skeleton = [...Asset.skeleton, ...assets]
}
//アニメーションデータの登録
Asset.registerAnimation = (assets) => {
    if (assets.constructor.name !== "Array") {
        console.warn("Asset.register:アセット情報としてArray以外のパラメータが渡された" + assets)
        return
    }
    Asset.animation = [...Asset.animation, ...assets]

}
//親子関係の登録
Asset.registerParent = (assets) => {
    if (assets.constructor.name !== "Array") {
        console.warn("Asset.register:アセット情報としてArray以外のパラメータが渡された" + assets)
        return
    }
    Asset.parent = [...Asset.parent, ...assets]

}

module.exports = Asset