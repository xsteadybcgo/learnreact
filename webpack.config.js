const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist',
    filename: "js/app.js"
  },
  resolve: {
    alias:{
        pages: path.resolve(__dirname,'src/pages'),
        component: path.resolve(__dirname,'src/component')
    }
  },
  module: {
    rules: [
        {
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env","react"]
                }
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader"]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        },
        {
            test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
            loader: "url-loader",
            options: {
                limit: 8192,
                name: 'resource/[name].[ext]'
            }
        },
        // 图片处理
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'js/base.js'

    })
  ],
  devServer:{
      port: 8090,
      historyApiFallback: {
          index: '/dist/index.html'
      }
  }
};
