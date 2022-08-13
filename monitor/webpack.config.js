/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-07 19:30:51
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-10 21:59:00
 * @FilePath: /monitor/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'monitor.js',
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'blocking'
    })
  ]
}