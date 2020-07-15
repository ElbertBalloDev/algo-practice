/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    const newArr = [];
    const zeroArr = [];
    const other = [...arr];
  
  do {
  const num = other.shift();
  if(num !== 0) newArr.push(num);
  else zeroArr.push(num);
  } while ( other.length > 0);
    return newArr.concat(zeroArr);
    
}
