# clean-rspack-plugin

一个Rspack插件，清除上一次打包构建产物。

## 安装

```javascript
// 选择一个你喜欢的包管理器进行安装
npm install clean-rspack-plugin --save-dev
// or
yarn add clean-rspack-plugin --dev
// or
pnpm add clean-rspack-plugin -D
```

## 使用

```javascript
// rspact.config.js
const CleanRspackPlugin = require("clean-rspack-plugin")

module.exports = {
  // ...
  plugins: [new CleanRspackPlugin()]
  // ...
}
```
