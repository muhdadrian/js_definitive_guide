// Destructuring assignment can be used with nested arrays. In this case, the lefthand side of the assignment should look like a nested array literal:

let [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5

// A powerful feature of array destructuring is that it does not actually require an array! You can use any iterable object on the righthand side of the assignment; any object that can be used with a for/of loop can also be destructured:

let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]

console.log(first, rest);
