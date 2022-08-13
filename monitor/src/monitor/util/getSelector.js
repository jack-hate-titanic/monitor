/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-08 07:54:40
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-08 22:12:17
 * @FilePath: /monitor/src/monitor/util/getSelector.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getSelector = function (path) {
  return path.reverse().filter((element) => {
    return element !== window && element != document;
  }).map((element) => {
    var selector;
    if (element.id) {
      selector = `#${element.id}`;
    } else if (element.className && typeof element.className === 'string') {
      selector = '.' + element.className.split(' ').filter(function (item) { return !!item }).join('.');
    } else {
      selector = element.nodeName;
    }
    return selector;
  }).join(" ");
}

export default function (pathsOrTarget) {
  if (Array.isArray(pathsOrTarget)) {
      return getSelector(pathsOrTarget);
  } else {
      var paths = [];
      var element = pathsOrTarget;
      while (element) {
          paths.push(element);
          element = element.parentNode;
      }
      return getSelector(paths);
  }
}