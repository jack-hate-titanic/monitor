/*
 * @Author: your name
 * @Date: 2022-02-27 21:58:05
 * @LastEditTime: 2022-02-27 22:26:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/less/postcss.config.js
 */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')
  ]
}