interface CacheProps {
  [key: string]: Array<(data?: unknown) => void>;
}

class Observer {
  private caches: CacheProps = {}; // 事件中心
  on(eventName: string, fn: (data?: unknown) => void) {
    // eventName事件名，独一无二，fn订阅后执行的自定义行为
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn);
  }

  emit(eventName: string, data?: unknown) {
    // 发布，将订阅的事件统一执行
    if (this.caches[eventName]) {
      this.caches[eventName].forEach((fn: (data?: unknown) => void) =>
        fn(data)
      );
    }
  }
}
