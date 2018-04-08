const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: path.resolve(__dirname,'../app/index.js'),
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
                use: {
                    loader: 'babel-loader',                    
                }
            },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'TEST',
        template: '../app/index.temp.html'
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
      })
    ],

    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }

}