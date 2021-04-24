export default function createElement(type, props, ...children) {
  const childrenElement = children.reduce((result, child) => {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", { textContent: child }));
      }
    }
    return result;
  }, []);
  return {
    type,
    // 因为要通过props.children拿到子节点，所以要把props和children合并到props
    props: Object.assign({ children: childrenElement }, props),
    children: childrenElement,
  };
}
