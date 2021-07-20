const bubbleSort = (arr) => {
  if (!arr || arr.length === 0) {
    return arr;
  }
  const arrLength = arr.length;
  for (let end = arrLength; end > 0; end--) {
    for (let i = 1; i < end; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(i - 1, i, arr);
      }
    }
  }
  return arr;
};

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const arr = [5, 3, 2, 4, 1];
console.log(bubbleSort(arr));
