/*
You can use BigInt() as a function for converting regular JS numbers or strings to BigInt values:
*/

console.log(BigInt(Number.MAX_SAFE_INTEGER));

let string = '1' + '0'.repeat(100);
console.log(BigInt(string));
