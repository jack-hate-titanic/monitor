
function flatAndUnique(numArr:any[]):number[]{
  if (!Array.isArray(numArr)) {
    return numArr;
  }
  let result:number[] = [];
  for (let i = 0; i < numArr.length; i++){
    if (Array.isArray(numArr[i])) {
      result = [...result, ...flatAndUnique(numArr[i])];
    } else {
      result.push(numArr[i]);
    }
  }
  return result;
}




const numArr = [1, 3, [2, 3, [3, 4]]];
console.log(flatAndUnique(numArr));

