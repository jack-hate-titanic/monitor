/*
 * @Author: your name
 * @Date: 2022-05-08 13:29:49
 * @LastEditTime: 2022-05-08 14:08:45
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/create.ts
 */
function myCreate(proto) { }



function Person(name) {
  this.name = name;
}

Person.prototype.study = function () {
  console.log('学习');
}

myCreate();