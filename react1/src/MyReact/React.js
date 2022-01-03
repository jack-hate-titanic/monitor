/*
 * @Author: your name
 * @Date: 2022-01-02 20:45:31
 * @LastEditTime: 2022-01-03 19:41:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react1/MyReact/react.js
 */
class React {
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map((child) =>
          typeof child === "object" ? child : this.createTextElement(child)
        ),
      },
    };
  }

  createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        // 有人可能说这里为什么叫nodeValue，我记不住呀，这是节点值的意思https://www.runoob.com/jsref/prop-node-nodevalue.html
        nodeValue: text,
        children: [],
      },
    };
  }
}
export default new React();
