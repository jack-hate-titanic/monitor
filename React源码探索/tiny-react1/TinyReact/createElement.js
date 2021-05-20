export default function createElement(ele, attr, ...children) {
  return {
    ele,
    attr,
    children,
  };
}
