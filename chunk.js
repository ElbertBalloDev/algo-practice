const chunk1 = (arr, chunkLength) => {
  let newArr = [];
  while( arr.length > 0 ) {
    let chunk = arr.splice(0, chunkLength);
    newArr.push(chunk);
  };
  return newArr;
};

const chunk2 = (arr, chunkLength) => {
  let newArr = [];
  let chunk = [];
  let index = 0;
  while (index < arr.length) {
    newArr.push(arr.slice(index, index+chunkLength));
    index += chunkLength;
  };
  return newArr;
};

console.log('chunk 1 using splice - mutating')
chunk1([1, 2, 3, 4], 2); //==> [[ 1, 2], [3, 4]]
chunk1([1, 2, 3, 4, 5], 2); //==> [[ 1, 2], [3, 4], [5]]
chunk1([1, 2, 3, 4, 5, 6, 7, 8], 3); //==> [[ 1, 2, 3], [4, 5, 6], [7, 8]]


console.log('chunk 2 using slice - non mutating');
chunk2([1, 2, 3, 4], 2); //==> [[ 1, 2], [3, 4]]
chunk2([1, 2, 3, 4, 5], 2); //==> [[ 1, 2], [3, 4], [5]]
chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3); //==> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
