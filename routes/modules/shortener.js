// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Shortener model
const Shortener = require('../../models/shortUrl')


// 搜尋網址對應頁面
router.get('/:shortName', (req, res) => {
  // 取得 shortName
  const shortName = req.params.shortName
  // 從資料庫找出符合的資料
  return Shortener.findOne({ shortName: shortName })
    .then((url) => res.redirect(url.hostName))  //導向頁面
    .catch((error) => console.log(error))  // 例外處理
})

// 匯出路由模組
module.exports = router


