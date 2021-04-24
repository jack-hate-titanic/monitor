import createDomElement from "./createDomElement";
const mountNativeElement = (virtualDom, container) => {
  // 将转换之后的Dom对象放置在页面中
  const newElement = createDomElement(virtualDom);
  newElement._virtualDom = virtualDom;
  container.appendChild(newElement);
};
export default mountNativeElement;
