 
 const openDialog = require("./dialog")

 module.exports = ()=>{
     /**
      * アニメーションデータの読み込み
      */
         // TODO: ダイアログからファイルを選ぶ    
     return new Promise((resolve) => {
         openDialog(src => {
             fetch(src).then(response => {
                 return response.json()
                }).then(root => {
                    resolve(root)
                })
            })
        })
    
}


 
