'use strict';

console.log(Infinity); // A positive number too big to represent
console.log(Number.POSITIVE_INFINITY); // Same value
console.log(1 / 0); // Infinity
console.log(Number.MAX_VALUE * 2); // infinity; overflow

console.log(-Infinity); // A negative number too big to represent
console.log(Number.NEGATIVE_INFINITY); // The same value
console.log(-1 / 0); // Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity

console.log(NaN); // The not-a-number value
console.log(Number.NaN); // The same value, written another way
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN

console.log(Number.MIN_VALUE / 2); // 0: underflow
console.log(-Number.MIN_VALUE / 2); // -0: negative zero
console.log(-1 / Infinity); // -0: also negative 0
console.log(-0);
