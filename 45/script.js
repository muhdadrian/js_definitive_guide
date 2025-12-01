// strings are immutable in JS. Methods like replace() and toUpperCase return new strings: they do not modify the string on which they are invoked.
// strings can also be treated like read-only arrays, and you can access individual chars(16-bit values) from a string using square brackets instead of the charAt() method:

let s = 'hello, world';
console.log(s[0]);
console.log(s[s.length - 1]);
