// 載入套件
const db = require('../../config/mongoose')
// 載入 Shortener model
const Shortener = require('../shortUrl')
// 範本資料
const urlData = require('../../shortenerURL.json')

// 新增種子資料
db.once('open', () => {
  console.log('MongoDB connected shortUrlSeeder!')
  const promise = []

  urlData.forEach((item) => {
    promise.push(
      Shortener.create({
        hostName: item.hostName,
        shortName: item.shortName
      })
    )
  })

  // 資料建立後，中斷連線
  Promise.all(promise).then(() => db.close())

  // 資料建立成功
  console.log('UrlData Insert Done')
})