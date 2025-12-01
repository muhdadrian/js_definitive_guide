/*
Symbol() never returns the same value twice, but Symbol.for() always returns the same value when called with the same string.

The str passed to Symbol.for() appears in the output of toString() for the returned Symbol, and it can also be retrieved by calling Symbol.keyFor() on the returned Symbol. 
*/

let s = Symbol.for('shared');
let t = Symbol.for('shared');

console.log(s === t); //true
console.log(s.toString()); //Symbol(shared)
console.log(Symbol.keyFor(t)); //shared
