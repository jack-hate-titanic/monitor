/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-08 07:25:53
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-10 22:00:50
 * @FilePath: /monitor/src/monitor/util/getLastEvent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let lastEvent;
['click','pointerdown', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(event => {
  document.addEventListener(event, (event1) => {
        lastEvent = event1;
    }, {
        capture: true,//capture 控制监听器是在捕获阶段执行还是在冒泡阶段执行 
        passive: true //passive 的意思是顺从的，表示它不会对事件的默认行为说 no
    });
});
export default function () {
    return lastEvent;
};