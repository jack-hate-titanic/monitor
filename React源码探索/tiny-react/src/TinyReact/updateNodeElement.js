const updateNodeElement = (newElement, virtualDom) => {
  // 获取节点对应的属性对象
  const newProps = virtualDom.props;
  if (newProps) {
    Object.keys(newProps).forEach((propName) => {
      const newPropsValue = newProps[propName];
      // 判断事件属性
      if (propName.slice(0, 2) === "on") {
        const eventName = propName.toLowerCase().slice(2);
        // 为元素添加事件
        newElement.addEventListener(eventName, newPropsValue);
      } else if (propName === "value" || propName === "checked") {
        newElement[propName] = newPropsValue;
      } else if (propName !== "children") {
        if (propName === "className") {
          newElement.setAttribute("class", newPropsValue);
        } else {
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    });
  }
};

export default updateNodeElement;
