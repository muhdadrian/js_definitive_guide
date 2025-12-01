// Type conversion

console.log(10 + ' objects'); //10 objects: Number 10 converts to a str
console.log('7' * '4'); // 28: both strs convert to numbers

let n = 1 - 'x'; // n == NaN; str "x" can't convert to a number
n + ' objects'; // "NaN objects": NaN converts to str "NaN"
