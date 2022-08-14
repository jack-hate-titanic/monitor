/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2020-05-31 22:47:25
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-14 21:43:51
 * @FilePath: /monitor/src/monitor/utils/tracker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let userAgent = require('user-agent');
function getExtraData() {
    return {
        title: document.title,
        url: location.href,
        timestamp: Date.now(),
        userAgent: userAgent.parse(navigator.userAgent).name,
        //用户ID
    }
}
//gif图片做上传 图片速度 快没有跨域 问题，
class SendTracker {
    constructor() {
        this.url = "";//上报的路径
        this.xhr = new XMLHttpRequest;
    }
    send(data = {}) {
        let extraData = getExtraData();
        let log = { ...extraData, ...data };
        //对象 的值不能是数字
        for (let key in log) {
            if (typeof log[key] === 'number') {
                log[key] = `${log[key]}`;
            }
        }
        console.log('log', log);
        // this.xhr.open('POST', this.url, true);
        // this.xhr.setRequestHeader('Content-Type', 'application/json');//请求体类型
        // this.xhr.onload = function () {
        //     // console.log(this.xhr.response);
        // }
        // this.xhr.onerror = function (error) {
        //     //console.log(error);
        // }
        // this.xhr.send(body);
    }
}
export default new SendTracker();