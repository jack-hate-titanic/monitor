// 此处要实现一个动态数组
// 顺序结构特点：1预先分配好的长度，需要预估存储数据需要的存储量
// 2.插入和删除需要移动其他元素
// 3.存取快捷，是随机存取结构
class ArrayList {
  /**元素的数量 */
  private size: number;
  /**所有元素 */
  private elements: any[];
  // static的好处是使数据在内存中的内存地址不变
  private static DEFAULT_CAPACITY: number = 10;

  constructor(capacity: number = ArrayList.DEFAULT_CAPACITY) {
    this.elements = new Array(capacity);
    this.size = this.elements?.length;
  }
  // 获取数量
  getSize = (): number => {
    return this.size;
  };

  // 包含某个元素
  containers = (element): any => {
    return this.elements.includes(element);
  };

  //
}

const list = new ArrayList();
console.log(list.getSize());
