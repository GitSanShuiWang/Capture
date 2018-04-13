#wepack4 配置

#package
"start": "cross-env NODE_ENV=development webpack-dev-server --config webpack/webpack.development.config.js --progress --colors"
"dev-build" 使用router则须本地服务启动，打包后不可使用路由

cross-env 使命令参数配置适用不同平台开发，统一结构

#webpack开发环境配置说明文档：
1.设置mode属性所在的开发环境情况。

2.设置context对entry和loader的路径影响[参考context说明](https://juejin.im/post/5a10d9fe51882554bd50a5d3)

3.babel 进行js,jsx的编译，谨记需配置.bablrc中的"presets":
"presets": ["@babel/preset-env", "@babel/preset-react","@babel/preset-stage-0"]
，使用env对react进行解析编译,stage-0使项目支持最新的提案。
npm install ... --save-dev
"@babel/core": "^7.0.0-beta.44",
"@babel/preset-env": "^7.0.0-beta.44",
"@babel/preset-react": "^7.0.0-beta.44",
"@babel/preset-stage-0": "^7.0.0-beta.44",
"babel-loader": "^8.0.0-beta",

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

6.react热更新，以及部分改变不是浏览器全部刷新
以及redux的state不变
react模块热替换，不刷新浏览器：：
(1)
devServer: {
    hot: true
}

(2)
plugins:[
     new webpack.HotModuleReplacementPlugin()
]

(3) 用了react-hot-loader的hot属性可以忽略此步骤，
如果使用AppContainer属性，配置可[参考](https://github.com/gaearon/react-hot-loader)
index.js中：(使页面不刷新)
if (module.hot) {
    module.hot.accept()
}

(4)
当模块热替换的时候，state会重置。
[参考官方](https://github.com/gaearon/react-hot-loader)的hot配置

7.App文件下的README.md进行redux和router的引入

8.按需加载
(1)npm install bundle-loader --save-dev

(2)新建Bundle.js

(3)改造路由器

note::
但是你可能发现，名字都是0.bundle.js这样子的，这分不清楚是哪个页面的js呀！

我们修改下webpack.dev.config.js,加个chunkFilename。chunkFilename是除了entry定义的入口js之外的js~

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    }
现在你运行发现名字变成home.js,这样的了。棒棒哒！

那么问题来了home是在哪里设置的？webpack怎么知道他叫home？

其实在这里我们定义了，router.js里面

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';

看到没。这里有个name=home。嘿嘿。

但是，如果有些组件加载不需要进行按需加载，则正常方式引入，不用按照上边进行加载即可,便会打包进filename主文件

9.缓存
https://webpack.js.org/configuration/output/#output-filename
output: {
  path: path.resolve(__dirname, '../build'),
  filename: 'js/[name].[hash].js',   //dev---hash;production---chunkhash
  chunkFilename: 'js/[name].[chunkhash].js'
},

10.



#生产环境配置

一、

(1)先删除webpack-dev-server相关的东西~

(2)devtool的值改成cheap-module-source-map

(3)刚才说的hash改成chunkhash

(4)mode改成production的值

二、提取公共部分
