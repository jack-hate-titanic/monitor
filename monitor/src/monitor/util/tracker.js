/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-08 08:01:13
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-10 22:01:24
 * @FilePath: /monitor/src/monitor/util/tracker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let userAgent = require('user-agent');
function getExtraData() {
  return {
    title: document.title,
    url: location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name
  }
}

class SendTracker{
  constructor() {
  }
  send(data = {}, callback) {
    let extraData = getExtraData();
    let logs = { ...extraData, ...data };
    for (let key in logs) {
      if (typeof logs[key] === 'number') {
        logs[key] = "" + logs[key];
      }
    }
    console.log(JSON.stringify(logs, null, 2));
    
  }
}

export default new SendTracker();