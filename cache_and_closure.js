const multiplyByX = x => {
	const cache = {};
  return (n) => {
    if(cache[n]){
      console.log(`cached ${n}`)
      return cache[n];
    } else {
      console.log(`adding to cache ${n} with sum of ${n * x}`);
      cache[n] = n * x;
      return n * x;
    }
  }
};

const multiplyBy10 = multiplyByX(10);
console.log(multiplyBy10(5)); // enters the else block
console.log(multiplyBy10(5)); // enters the if block
console.log(multiplyBy10(5)); // enters the if block
console.log(multiplyBy10(7)); // enters the else block
console.log(multiplyBy10(7)); // enters the if block
