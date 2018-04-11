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
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name]-[hash:8].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                      gifsicle: {
                        interlaced: false,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // Specifying webp here will create a WEBP version of your JPG/PNG images
                      webp: {
                        quality: 75
                      }
                    }
                }],
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

      new webpack.DefinePlugin({
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        // __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        //'SET_URL': JSON.stringify("http://dev.example.com")
      }),

    ],

    devServer: {
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true,  // 使用热加载插件 HotModuleReplacementPlugin,进行热更新
        port: 20001,
    }

}
