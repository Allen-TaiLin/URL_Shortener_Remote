// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const urlExists = require('url-exists')
const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

const generateOutput = require('./public/generateOutput')


// 設定資料庫
require('./config/mongoose')

const Shortener = require('./models/shortUrl')
// 解析 port 當前的狀態 決定要回傳那個 host
const host = 'http://localhost:3000/shortener/'



app.get('/', (req, res) => {

  res.render('index')
})


app.post('/', (req, res) => {
  const checkUrl = req.body.url
  console.log('this is ' + checkUrl.toUpperCase())

  urlExists(checkUrl, function (err, exists) {
    //console.log(exists)
    if (exists) {
      Shortener.findOne({ hostName: checkUrl })
        .lean()
        .then((url) => {
          // 是否存在
          if (url) {
            console.log('找到了匹配資料，渲染畫面！')
            return res.render('index', { code: url.shortName, host })
          } else {
            console.log('沒有找到匹配資料，生成一組code並開始進行後續動作！')
            let shortName = generateOutput()

            Shortener.find()
              .then((urls) => {
                // 檢查 shortName 是否有重複
                while (urls.find((item) => {
                  item.shortName === shortName
                })) {
                  shortName = generateOutput()
                }

                Shortener.create({
                  hostName: checkUrl,
                  shortName: shortName
                })
                  .then(() => {
                    res.render('index', { code: Shortener, host })
                  })

              })
              .catch((error) => console.log(error))
          }


        })
        .catch((error) => console.log(error))
    }
  })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})