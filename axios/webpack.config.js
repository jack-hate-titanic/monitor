/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-24 15:46:26
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-24 16:35:12
 * @FilePath: /axios/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index'),
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, './dist/')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 9006,
    open: true,
  }
}