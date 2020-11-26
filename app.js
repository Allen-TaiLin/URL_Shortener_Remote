// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



// 設定資料庫
require('./config/mongoose')

app.get('/', (req, res) => {

  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})