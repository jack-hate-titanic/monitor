/*
 * @Author: your name
 * @Date: 2022-04-28 22:31:12
 * @LastEditTime: 2022-04-28 23:43:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/webWorker.js
 */


// const workercode = () => {
//   console.log('这是子线程');
//   // 模拟数据处理
//   function handleData(num) {
//     for (let i = 0; i < num; i++) {
//       let str = ''
//       while (str.length < 150) {
//         str += '哈'
//       }
//     }
//   }

//   self.onmessage = function (e) {
//     console.time('处理数据时间')
//     handleData(2000000)
//     console.timeEnd('处理数据时间')
//     self.postMessage('处理完毕');
//   }

// }


var blob = new Blob([document.querySelector('#worker').textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  console.log(e);
};
worker.postMessage('nihao')