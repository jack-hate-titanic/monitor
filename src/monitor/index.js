/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2020-05-31 22:47:25
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-13 20:22:29
 * @FilePath: /monitor/src/monitor/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { injectJsError } from './lib/jsError';
import { injectXHR } from './lib/xhr';
import { blankScreen } from './lib/blankScreen';
import { timing } from './lib/timing';
// 捕获js错误
injectJsError();
injectXHR();
blankScreen();
timing();