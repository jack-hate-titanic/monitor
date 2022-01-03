/*
 * @Author: your name
 * @Date: 2022-01-03 10:55:04
 * @LastEditTime: 2022-01-03 19:39:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react1/MyReact/reactDom.js
 */
class ReactDOM {
  render(virtualDOM, container) {
    let fragment = document.createDocumentFragment();
    // TODO: virtualDOM 是一个树形结构，需要进行深度优先遍历
    const generatorDom = function (virtualDOM, container) {
      if (virtualDOM.type === "TEXT_ELEMENT") {
        const node = document.createTextNode(virtualDOM.props.nodeValue);
        container.appendChild(node);
      } else {
        const node = document.createElement(virtualDOM.type);
        container.appendChild(node);
        for (let key in virtualDOM.props) {
          if (key === "children") {
            let children = virtualDOM.props.children;
            if (!!children.length) {
              children.forEach((child) => {
                generatorDom(child, node);
              });
            }
          } else {
            node[key] = virtualDOM.props[key];
          }
        }
      }
    };
    generatorDom(virtualDOM, fragment);
    container.appendChild(fragment);
  }
}
module.exports = new ReactDOM();
