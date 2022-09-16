// Calculate the sum of all numbers in an array and print out that value
// Run node index.js to see the output of this problem
// See if you can find the issues and get this code running with a traditional for loop.

// Extra challenge is to convert this for loop into something more current, like a map.
// How would you implement this same loop with a map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
let sum = 0;
const numberArr = [32, 12, 17, 904, 1, 59];

for (let i = 0; i > numberArr.length; i++) {
  sum += numberArr[i];
}

numberArr.map(num => {
  sum += num;
})

console.log(sum);
