const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //设置环境模式为开发，业务逻辑通过process.env.NODE_ENV获取当前的运行环境
    mode: 'development',
    //使用默认配置，README.md中有link说明
    context: path.resolve(__dirname),
    /*错误信息是不是提示的很详细,我们在srouce里面能看到我们写的代码，也能打断点调试哦~*/
    devtool: 'inline-source-map',
    //入口文件
    entry: path.resolve(__dirname,'../app/index.js'),
    //开发时，打包后文件
    output: {
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "../app")
                ],
                exclude: [
                    path.resolve(__dirname, "../node_modules")
                ],
                use: {
                    loader: 'babel-loader',     
                    options: {
                        cacheDirectory: true
                    }               
                }
            },
        ],
    },

    //免文件导入时后缀名
    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'TEST',
        template: '../app/index.temp.html'
      }),

      //热加载插件，配合devServer使用
      new webpack.HotModuleReplacementPlugin(),

    ],

    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
        port: 20001,
    }

}