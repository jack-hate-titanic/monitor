/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-24 19:08:45
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-24 19:11:45
 * @FilePath: /axios/src/default.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const defaults = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json',
    }
  }
}

export default defaults;