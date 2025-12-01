/*
Arithmetic with BigInt values works like arithmetic with regular JS numbers, except that division drops any remainder and rounds down to (toward zero):
*/

console.log(1000n + 2000n);
console.log(3000n - 2000n);
console.log(2000n * 3000n);
console.log(3000n / 997n); //the quotient is 3
console.log(3000n % 997n); //the remainder is 9
//console.log(2n ** 131071n - 1n);

//JS does not allow mixed operands (BigInt with regular number operands) to the arithmetic operators
