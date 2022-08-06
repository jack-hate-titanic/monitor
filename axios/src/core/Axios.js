import InterceptorManage from "./InterceptorManage";



class Axios{
  constructor(config) {
    this.defaults = config;
    this.interceptors = {
      request: new InterceptorManage(),
      response: new InterceptorManage(),
    }
  }

  request(config) {
    if (!config) {
      config = this.defaults;
    } else {
      config = { ...this.defaults, ...config}
    }
    
    // 拦截器队列
    let chain = [this.sendAjax.bind(this), undefined];

    // 请求拦截
    this.interceptors.request.handles.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected);
    })

    // 响应拦截
    this.interceptors.response.handles.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected);
    })

    // 执行队列，每次执行一对，并给promise赋最新的值
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }

  sendAjax(config) {
    return new Promise((resolve) => {
      const {url = '', method = 'get', data = {}} = config;
        // 发送ajax请求
        console.log(config);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function() {
            console.log(xhr.responseText)
            resolve(xhr.responseText);
        };
        xhr.send(data);
    })
  }
}

export default Axios;