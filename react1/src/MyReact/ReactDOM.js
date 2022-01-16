/*
 * @Author: your name
 * @Date: 2022-01-03 10:55:04
 * @LastEditTime: 2022-01-03 20:52:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react1/MyReact/reactDom.js
 */

class ReactDOM {
  constructor() {
    // const fiberNode = {
    //   type: element.type,
    //   props: element.props,
    //   child: Fiber,
    //   sibling: Fiber,
    //   parent: Fiber,
    //   dom: null,
    // };
    this.nextUnitOfWork = null;
  }

  createDom(fiber) {
    const dom =
      fiber.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(fiber.type);
    const isProperty = (key) => key !== "children";
    Object.keys(fiber.props)
      .filter(isProperty)
      .forEach((name) => (dom[name] = fiber.props[name]));
    return dom;
  }
  render(virtualDOM, container) {
    this.nextUnitOfWork = {
      dom: container,
      props: {
        children: [element],
      },
    };
  }

  workLoop(deadline) {
    let shouldYield = false;
    while (this.nextUnitOfWork && !shouldYield) {
      this.nextUnitOfWork = performUnitOfWork(this.nextUnitOfWork);
      shouldYield = deadline.timeRemaining() < 1;
    }
  }
  // 1.创建DOM；
  // 2.为当前 Fiber 的所有子元素创建 Fiber，并且构建连接；
  // 3.按照深度优先遍历的顺序（child > sibling > parent），确定下一个待处理任务。
  performUnitOfWork(fiber) {
    if (!fiber.dom) {
      fiber.dom = createDom(fiber);
    }

    if (fiber.parent) {
      fiber.parent.dom.appendChild(fiber.dom);
    }

    const elements = fiber.props.children;
    let index = 0;
    let prevSibling = null;

    while (index < elements.length) {
      const element = elements[index];

      const newFiber = {
        type: element.type,
        props: element.props,
        parent: fiber,
        dom: null,
      };

      if (index === 0) {
        fiber.child = newFiber;
      } else {
        prevSibling.sibling = newFiber;
      }

      prevSibling = newFiber;
      index++;
    }

    if (fiber.child) {
      return fiber.child;
    }
    let nextFiber = fiber;
    while (nextFiber) {
      if (nextFiber.sibling) {
        return nextFiber.sibling;
      }
      nextFiber = nextFiber.parent;
    }
  }
}
module.exports = new ReactDOM();
