const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  //设置环境模式为开发，业务逻辑通过process.env.NODE_ENV获取当前的运行环境
  mode: "production",
  //使用默认配置，README.md中有link说明
  context: path.resolve(__dirname),

  devtool: "source-map",
  //入口文件
  entry: path.resolve(__dirname, "../app/index.js"),
  //开发时，打包后文件
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "demandJs/[name].[chunkhash].js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "../app")],
        exclude: [path.resolve(__dirname, "../node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "fonts/[name]-[hash:8].[ext]"
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name]-[hash:8].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: "65-90",
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
          }
        ]
      }
    ]
  },

  //免文件导入时后缀名
  resolve: {
    extensions: [".js", ".jsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack4-GO",
      template: "../app/index.temp.html",
      favicon: "../public/favicon.ico"
    }),

    new webpack.DefinePlugin({
      // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
      // __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
      //'SET_URL': JSON.stringify("http://dev.example.com")
    }),

    new CleanWebpackPlugin(["build/*"], {
      root: path.resolve(__dirname, "..")
    })

  ],

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]components[\\/]/,
          name: "chunkJs/commons",
          chunks: "initial",
          minChunks: 2,
          priority: 10,
          enforce: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "chunkJs/vendors",
          chunks: "all",
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: "chunkJs/manifest"
    }
  }

}
