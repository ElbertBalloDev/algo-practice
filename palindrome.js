//const word = "racecar";

let arr = [];
let rWord = "";

//1st solution
arr = word.split("");

for (let i = 0; i < word.length; i++) {
  rWord += arr.pop();
}

/* 
2nd solution. using the reverse join methods 
rWord = word.split().reverse().join();
*/

word === rWord
  ? console.log(`${word} is a palindrome`)
  : console.log(`${word} is not a palindrome`);
