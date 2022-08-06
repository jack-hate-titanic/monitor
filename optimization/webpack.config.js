/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-16 17:46:55
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-16 18:17:28
 * @FilePath: /optimization/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname,'/dist/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  cache: {
    type: 'filesystem', // 使用文件缓存
  }

}