/*
 * @Author: your name
 * @Date: 2022-01-22 15:40:46
 * @LastEditTime: 2022-01-22 17:33:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myRequire/b.js
 */
const MyModule = require("./MyModule");
const a = MyModule.require("./c");
console.log(a);
