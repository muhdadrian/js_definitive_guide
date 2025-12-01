// For length property, JS provides a rich API for working with strings:

let s = 'Hello, world'; //Start with some text

// Searching a string
console.log(s.indexOf('l')); // position of 1st letter l
console.log(s.indexOf('l', 3)); // position of 1st "l" at or after 3
console.log(s.indexOf('zz')); // s does not include the substring "zz"
console.log(s.lastIndexOf('l')); // position of last letter l
