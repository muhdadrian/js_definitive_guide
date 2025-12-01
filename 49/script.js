//Pattern Matching

// Text between a pair of slashes constitutes a regular expression literal. The second slash in the pair can also be followed by one or more letters, which modify the meaning of the pattern.

/^HTML/; // Match the letters HTML at the start of a str
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i; // Match 'javascript' as a word, case-insensitive

//Example:
let text = 'testing: 1, 2, 3'; //sample text
console.log(text);

let pattern = /\d+/g; //matches all instances of one or more digits
console.log(pattern);

console.log(pattern.test(text)); //true: a match exists
console.log(text.search(pattern)); //9: position of first match
console.log(text.match(pattern)); //array of all matches
console.log(text.replace(pattern, '#'));
console.log(text.split(/\D+/)); // split on nondigits
