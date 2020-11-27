// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const urlExists = require('url-exists')

// 引用 Shortener model
const Shortener = require('../../models/shortUrl')
// 產生隨機5碼英數組合字串
const generateOutput = require('../../public/generateOutput')
// 解析 port 當前的狀態 決定要回傳那個 host
const host = process.env.PORT ? 'https://vast-springs-68448.herokuapp.com/shortener/' : 'http://localhost:3000/shortener/'


// 定義首頁路由
router.get('/', (req, res) => {
  //讀取index檔案、渲染畫面
  return res.render('index')
})


// 搜尋、比對、建立短網址
router.post('/', (req, res) => {
  // 從 req.body 拿出表單裡的資料
  const option = req.body
  // 新增物件資料
  option.status = 'success'
  option.host = host

  // 檢查確定URL是否正確
  urlExists(option.hostName, function (err, exists) {
    //console.log(exists)
    if (exists) {
      // 從資料庫找出符合的資料
      Shortener.findOne({ hostName: option.hostName })
        .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料
        .then((url) => {
          // 是否存在
          if (url) {
            // 有符合的資料，取 shortName
            option.shortName = url.shortName
            // 讀取index檔案、渲染畫面
            return res.render('index', { option })
          } else {
            // 資料庫沒有相關紀錄，準備新增
            // 隨機給5碼值
            let shortName = generateOutput()

            // 取出 Shortener model 所有資料
            Shortener.find()
              .then((urls) => {
                // 檢查比對 shortName 是否有重複
                // 有重複的話重新隨機給值
                while (urls.find((item) => {
                  item.shortName === shortName
                })) {
                  shortName = generateOutput()
                }
                // 確認沒有重複寫入資料庫
                Shortener.create({
                  hostName: option.hostName,
                  shortName: shortName
                }).then(() => {
                  // 設定 shortName
                  option.shortName = shortName
                  // 讀取index檔案、渲染畫面
                  return res.render('index', { option })
                  // 例外處理
                }).catch((error) => console.log(error))
              })
              .catch((error) => console.log(error))  // 例外處理
          }
        })
        .catch((error) => console.log(error))  // 例外處理
    } else {
      // URL 格式錯誤
      option.status = 'danger'
      // 讀取index檔案、渲染畫面
      return res.render('index', { option })
    }
  })
})

// 匯出路由模組
module.exports = router