// Challenge
// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

// Sample Test Cases
// Input:9
// Output:23

// Input:100
// Output:541


function PrimeMover(num) {

function isPrime(num) {
  for (i = 2; i < num;i++) {
    if (num % i === 0) {
      return false;
    }
  }
    return true;
}
var count = 0;
var number = 2;

while (count < num) {
  if (isPrime(number)) {
    count++;
  }
  number++;
}
  return number - 1;
}

console.log(PrimeMover(9));
console.log(PrimeMover(16));