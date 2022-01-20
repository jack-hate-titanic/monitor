/*
 * @Author: your name
 * @Date: 2022-01-16 17:45:34
 * @LastEditTime: 2022-01-16 18:13:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MyKoa/koa/lib/request.js
 */
const request = {
  get method() {
    return this.req.method;
  },
};

module.exports = request;
