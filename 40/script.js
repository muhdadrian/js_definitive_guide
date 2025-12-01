// For length property, JS provides a rich API for working with strings:

let s = 'Hello, world'; //Start with some text

// Creating modified versions of a string
console.log(s.replace('llo', 'ya'));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.normalize()); // Unicode NFC normalization: ES6
console.log(s.normalize('NFD')); // NFD normalization. Also 'NFKC', 'NFKD'
