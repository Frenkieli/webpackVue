# vue webpack 自己是建置模版
>package.json
``` json
  "devDependencies": {}      // 只需要在開發環境使用
  "dependencies": {}       // 在發佈環境中也需要用到的套件
```
babel和POSTcss設定檔都寫在這邊

未來應該可以試著拉出來寫看看

也需要在更詳細的看也哪些東西可以設定

### 使用webpack伺服器

npm install -g webpack-dev-server

    webpack.config.js裡面的配置有其順序，反了就會編譯失敗更慘的是跑出錯誤的結果但沒有報錯