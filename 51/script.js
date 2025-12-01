'use strict';

// Symbols

let strname = 'string name'; // A str to use as a property name
let symname = Symbol('propname'); // A Symbol to use as a property name

console.log(typeof strname); // strname is a str
console.log(typeof symname); // symname is a symbol

let o = {}; // Create a new object
o[strname] = 1; // define a property with a str name
o[symname] = 2; // define a property with a Symbol name
console.log(o[strname]); // 1: access the string-named property
console.log(o[symname]); // 2: access the symbol-named property
