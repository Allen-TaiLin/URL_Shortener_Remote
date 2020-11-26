// 載入套件
const mongoose = require('mongoose')
// 使用mongoose.Schema
const Schema = mongoose.Schema
// 建立Schema規則
const shortenerSchema = new Schema({
  hostName: {
    type: String,  // 資料型別是字串
    required: true  // 這是個必填欄位
  },
  shortName: {
    type: String,
    required: true
  }
})

// 匯出模型樣板
module.exports = mongoose.model('Shortener', shortenerSchema)