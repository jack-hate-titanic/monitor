
export function extend(a, b, context) {
  for (let key of b) {
    if (key === 'constructor') {
      continue;
    }
    
    if (typeof context[key] === 'function') {
      a[key] = context[key].bind(context);
    } else {
      a[key] = context[key];
    }
  }
}