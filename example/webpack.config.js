/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2020-05-31 22:47:25
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-20 12:32:57
 * @FilePath: /monitor/example/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');

module.exports = {
    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname, dir)
        const entry = path.join(fullDir, 'app.js')
        if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
          entries[dir] =  [entry]
        }
        return entries
    }, {}),
    context: process.cwd(),//上下文目录 
    mode: 'development',//开发模式
    output: {
        path: path.resolve(__dirname, 'dist'),//输出目录
        filename: '[name].js',//文件名
        publicPath: '/dist/'
    }

}