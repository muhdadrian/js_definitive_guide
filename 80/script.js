// If you want to collect all unused or remaining values into a single variable when destructuring an array, use three dots (...) before the last variable name on the left-hand side:

let [x, ...y] = [1, 2, 3, 4]; // y == [2,3,4]
console.log(x);
console.log(y);
