/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-24 16:45:05
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-24 17:28:24
 * @FilePath: /axios/src/core/InterceptorManage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class InterceptorManage{
  constructor() {
    this.handles = [];
  }

  use(fullfield, rejected) {
    this.handles.push({
      fullfield,
      rejected
    })
  }

}

export default InterceptorManage;