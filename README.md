# 短網址產生器 - URL-shortener

使用者可以在首頁表單輸入原始網址，將會回傳格式化後的短網址，在伺服器啟動期間，使用者在瀏覽器的網址列，輸入你提供的短網址，瀏覽器就會導向原本的網站。
[HEROKU 網址](https://vast-springs-68448.herokuapp.com/)
![](/2_3A14URL_Shortener.png)

## Features - 產品功能

- 使用者輸入原始網址，將回傳格式化後的短網址
- 使用者可以成功使用短網址連向原始網站
- 短網址格式為 5 個英數亂碼
- 防止有重覆的網址組合出現
- 防止使用者沒有輸入內容 (網址)，提示使用者
- 使用者可以按 Copy 按鈕來複製縮短後的網址

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/) (版本使用 10.15.0) - JavaScript 執行環境
2. [npm](https://nodejs.org/en/) (版本使用 6.4.1) - Node.js 的套件管理器
3. [Express](https://www.npmjs.com/package/express) (版本使用 4.17.1) - 應用程式架構
4. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) (版本使用 5.2.0) - 模板引擎
5. [Nodemon](https://www.npmjs.com/package/nodemon) (版本使用 2.0.6) - 伺服器輔助
6. [Body-Parser](https://www.npmjs.com/package/body-parser) (版本使用 1.19.0) - Node.js body parsing middleware
7. [MongoDB](https://www.mongodb.com/) (版本使用 4.2.11) - 資料庫
8. [Mongoose](https://www.npmjs.com/package/mongoose) (版本使用 5.10.15) - MongoDB 的 ODM 可以在程式中與資料庫溝通
9. [URL-Exists](https://www.npmjs.com/package/url-exists) (版本使用 1.0.3) - Express 的 middleware「中介軟體」，用於確定URL是否存在

## Use Tools - 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Robo 3T](https://robomongo.org/) - 和 MongoDB 搭配的圖形介面工具

## Installing - 專案安裝流程

1. 開啟終端機(Terminal) 或 (Git Bash) 到欲存放專案的本機位置並執行:

```
git clone https://github.com/Allen-TaiLin/URL_Shortener_Remote.git
```

2. 開啟終端機(Terminal) 或 (Git Bash)，進入到存放此專案的資料夾

```
cd url_shortener
```

3. 安裝 npm 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install
```

4. 安裝 nodemon 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install -g nodemon
```

5. 匯入種子資料到資料庫

```
在 Git Bash 或 (Terminal) 輸入 npm run seed
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當終端顯示出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is listening on http://localhost:3000
mongodb connected!
```



