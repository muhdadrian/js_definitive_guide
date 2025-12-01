// For length property, JS provides a rich API for working with strings:

let s = 'Hello, world'; //Start with some text

// Inspecting individual (16-bit) chars of a string
console.log(s.charAt(0)); // the 1st char
console.log(s.charAt(s.length - 1)); // the last char
console.log(s.charCodeAt(0)); //16-bit number at the specified position
console.log(s.codePointAt(0)); //ES6, works for codepoints > 16 bits
