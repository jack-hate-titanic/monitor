// virtual dom 是否为函数，判断条件有两个
// 1.virtual dom的type是否为函数，2.函数的原型对象中不能有render
// 只有类组件的原型对象中有render
import isFunction from "./isFunction";

const isFunctionalComponent = (virtualDom) => {
  const type = virtualDom && virtualDom.type;
  return (
    type && isFunction(virtualDom) && !(type.prototype && type.prototype.render)
  );
};

export default isFunctionalComponent;
