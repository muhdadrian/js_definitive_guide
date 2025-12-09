// Here are simple destructuring assignments using arrays of values:

let [x, y] = [1, 2]; // Same as let x=1, y=2
[x, y] = [x + 1, y + 1]; // Same as x = x + 1, y = y + 1
[x, y] = [y, x]; // Swap the value of the two variables
[x, y]; // => [3,2]: the incremented and swapped values

// console.log([x, y]);
