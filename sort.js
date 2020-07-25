//Factorial with a loop
const computeFactorial = num => {
	let result = 1;
	for (let i = 2; i <= num; i++) {
		console.log(`result ${result} + ${i} = ${result * i}`);
		result *= i;
	}
};

computeFactorial(5);

//Factorial with recursion
const recursiveFactorial = num => {
  if( num === 1){
    console.log('hitting the base case');
    return 1;
  } else {
    console.log(`returning ${num} * recursiveFactorial(${num-1})`);
    return num * recursiveFactorial(num - 1)
  }
}

console.log(recursiveFactorial(5));

const logNumbers = (start, end) => {
	console.log(`iteratively looping from ${start} until ${end}`);
	for (let i = start; i <= end; i++) {
		console.log("hitting index", i);
	}
};

console.log("~~~~ logNumbers~~~~");
logNumbers(1, 2);

const recursiveLog = (start, end) => {
	const recurse = i => {
		console.log("hitting index", i);
		if (i < end) {
			recurse(i + 1);
		}
	};
	recurse(start);
};

recursiveLog(1,5);

//Recursion with closure
function wrapperFnLoop(start, end) {
	function recurse(i) {
		console.log(`loopiung from ${start} until ${end}`);

		if (i < end) {
			recurse(i + 1);
		}
	}

	recurse(start);
}

//Recursion without closure
function MemoFnLoop(i, end) {
	console.log(`looping from ${i} until ${end}`);
	if (i < end) {
		MemoFnLoop(i + 1, end);
	}
}

MemoFnLoop(1, 3);

//accumulator technique
function joinElements(arr, joinString) {
	function recurse(index, resultSoFar) {
		resultSoFar += arr[index];
		if (index === arr.length - 1) {
			return resultSoFar;
		} else {
			return recurse(index + 1, resultSoFar + joinString);
		}
	}
	return recurse(0, "");
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));

//accumulator with loop
const joinLoopElements = (arr, joinString) => {
	let resultSoFar = "";
	for (let i = 0; i < arr.length - 1; i++) {
		resultSoFar += arr[i] + joinString;
	}
	return resultSoFar + arr[arr.length - 1];
};

console.log(joinLoopElements(["s", "cr", "t cod", " :) :)"], "e"));

//memoizing a factorial
const memoize = fn => {
	const cache = {};

	return (num) => {
		if (cache[num]) {
      console.log(`cached num ${num}`);
			return cache[num];
		} else {
      console.log(`storing num ${num}`);
      let result = fn(num)
      cache[num] = result;
      return result;
		}
	};
};

const factorial = memoize(
  (x) => {
  if (x === 0) return 1;
	else return x * factorial(x - 1);
}
)

//factorial(5);
console.log(factorial(5));
factorial(8);

// Linear Search
const linearSearch = (list, item) => {
	let result = -1;
	list.forEach((listItem, index) => {
		if (listItem === item) {
			result = index;
		}
	});
	return result;
};

console.log(linearSearch([120, 60, 80, 950, 20, 90, 80], 90));

// Binary Search
function binarySearch(list, item) {
	let min = 0;
	let max = list.length - 1;
	let guess;

	while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if(list[guess] === item) {
      return guess;
    } else {
      if( item < list[guess]) {
        max = guess - 1;
      } else {
        min = guess + 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch([2, 6, 7, 90, 103], 90));

const swap = ( arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (list) => {
	let outerCount = 0;
  let innerCount = 0;
  let countSwap = 0;

	for (let i = 0; i < list.length; i++) {
		outerCount++;
		for (let j = 1; j < list.length; j++) {
			innerCount++;
			if (list[j -1] > list[j]) {
        countSwap++;
        swap(list, j-1, j);
			}
		}
  }

  console.log('outer:', outerCount, 'inner:', innerCount, 'swap:', countSwap);
  return list;
};

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(bubbleSort(arrayRandom));
// console.log(bubbleSort(arrayOrdered));
// console.log(bubbleSort(arrayReversed));

const swap = (arr, prev, next) => {
	let temp = arr[prev];
	arr[prev] = arr[next];
	arr[next] = temp;
};

const bubbleSort = list => {
	for (let i = 0; i < list.length; i++) {
		for (let j = 1; j < list.length; j++) {
			if (list[j - 1] > list[j]) {
				swap(list, j - 1, j);
			}
		}
	}
	return list;
};

console.log(bubbleSort(arrayRandom));

// Greedy Algorithm 
const makeChange = (coins, num) => {
	let remaining = num;
	let count = 0;

	coins.sort((a, b) => b - a);
	while (remaining > 0) {
		if (coins.length === 0) return "You dont have enough coins";
		count++;
		remaining -= coins.shift();
	}
	return count;
};

console.log(makeChange([5, 10, 25], 30));
