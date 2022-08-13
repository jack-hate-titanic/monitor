/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-08 08:00:32
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-08 08:00:37
 * @FilePath: /monitor/src/monitor/util/formatTime.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default (time) => {
  return `${time}`.split(".")[0]
}