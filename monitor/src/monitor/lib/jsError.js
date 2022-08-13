/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-07 19:37:15
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-10 21:54:44
 * @FilePath: /monitor/src/monitor/lib/jsError.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import getLastEvent from '../util/getLastEvent';
import getSelector from '../util/getSelector';
import formatTime from '../util/formatTime';
import tracker from '../util/tracker';

export function injectJsError() {
  // 一般js运行时错误使用window.onerror捕获处理
  window.addEventListener('error', (event) => { 
    let lastEvent = getLastEvent();
    if (event.target && (event.target.src || event.target.href)) {
      tracker.send({//资源加载错误
          kind: 'stability',//稳定性指标
          type: 'error',//resource
          errorType: 'resourceError',
          filename: event.target.src || event.target.href,//加载失败的资源
          tagName: event.target.tagName,//标签名
          timeStamp: formatTime(event.timeStamp),//时间
          selector: getSelector(event.path || event.target),//选择器
      })
  } else {
      tracker.send({
          kind: 'stability',//稳定性指标
          type: 'error',//error
          errorType: 'jsError',//jsError
          message: event.message,//报错信息
          filename: event.filename,//报错链接
          position: (event.lineNo || 0) + ":" + (event.columnNo || 0),//行列号
          stack: getLines(event.error.stack),//错误堆栈
          selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : ''//CSS选择器
      })
  }
  }, true);
}

function getLines(stack) {
  if (!stack) {
      return '';
  }
  return stack.split('\n').slice(1).map(item => item.replace(/^\s+at\s+/g, '')).join('^');
}