// The number of variables on the left of a destructuring assignment does not have to match the number of array elements on the right. Extra variables on the left are set to undefined, and extra values on the right are ignored. The list of variables on the left can include extra commas to skip certain values on the right:

let [x, y] = [1]; // x == 1; y == undefined
// console.log(x, y);
[x, y] = [1, 2, 3]; // x == 1; y == 2
// console.log(x, y);
[, x, , y] = [1, 2, 3, 4]; // x == 2; y == 4
// console.log(x, y);
