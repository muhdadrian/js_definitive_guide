'use strict';

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.

// Objects are enclosed in curly braces.
let book = {
  topic: 'JavaScript', // The property 'topic' has value 'JavaScript'
  edition: 7, // The property 'edition' has value 7
}; // The curly brace marks the end of the object.

// Access the properties of an object with . or []:
console.log(book.topic); // => 'JavaScript'
console.log(book['edition']); // 7: another way to access property values.
console.log((book.author = 'Flanagan')); // Create new properties by assignment.
console.log((book.contents = {})); // {} is an empty object with no properties.

// Conditionally access properties with ?.(ES2020):
console.log(book.contents?.ch01?.sect1); // => undefined: book.contents has no ch01 property.
