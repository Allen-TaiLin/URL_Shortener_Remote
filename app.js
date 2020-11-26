// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port = 3000

// 設定資料庫
require('./config/mongoose')

app.get('/', (req, res) => {
  res.send('short')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})