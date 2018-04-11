#wepack4 配置

#package
"start": "cross-env NODE_ENV=development webpack-dev-server --config webpack/webpack.development.config.js --progress --colors"

cross-env 使命令参数配置适用不同平台开发，统一结构

#webpack开发环境配置说明文档：
1.设置mode属性所在的开发环境情况。

2.设置context对entry和loader的路径影响[参考context说明](https://juejin.im/post/5a10d9fe51882554bd50a5d3)

3.babel 进行js,jsx的编译，谨记需配置.bablrc中的"presets": ["react", "env"]，使用env对react进行识别解析编译。
npm install ... --save-dev
"babel-cli": "^6.26.0",
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",

4.图片、文件、字体、样式 的loader

#开发环境配置要进行重要配置：
4.html模板插件配置，可自动引入资源文件js\css。
npm install ... --save-dev
"html-webpack-plugin": "^3.2.0",

5.devServer开发配置
// 热加载插件
new webpack.HotModuleReplacementPlugin(),
npm install ... --save-dev
"webpack-dev-server": "^3.1.1"

6.react热更新，以及部分改变不是浏览器全部刷新【未做。。】
以及redux的state不变
