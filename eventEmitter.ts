/*
 * @Author: your name
 * @Date: 2022-05-08 10:10:49
 * @LastEditTime: 2022-05-08 11:16:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/eventEmitter.js
 */
interface Callback{
  (...args: any[]): void;
}

interface Events{
  [eventName:string]:Callback[]
}

class EventEmitter{
  protected events: Events = {}
  
  on(eventName: string, cb: (...args: any[]) => void) {
    let fns = this.events[eventName];
    if (!fns) {
      // 这里不能使用fns，使用的话地址就变了
      this.events[eventName] = [cb];
    } else {
      if (!fns.includes(cb)) {
        fns.push(cb);
      }
    }
  }

  emit(eventName:string,...args:any[]) {
    let fns = this.events[eventName];
    if (fns) {
      fns.forEach((fn) => {
        fn(...args);
      })
    }
  }

  off(eventName: string, cb: (...args: any[]) => void) {
    // 复杂函数只要是赋值就会共用同一块内存地址
    const fns = this.events[eventName];
    if (fns) {
      for (let i = 0; i < fns.length; i++){
        if (fns[i] === cb) {
          fns.splice(i, 1);
          i--;
        }
      }      
    }
  }
}

const handler = (name: string, age: number) => {
  console.log(`再来一个${name}${age}`);
}

const event1 = new EventEmitter();
event1.on('tap', () => {
  console.log('你好');
})
event1.on('tap', handler)
event1.on('tap', handler)
event1.emit('tap','ws', 10);
event1.off('tap', handler)
event1.emit('tap');