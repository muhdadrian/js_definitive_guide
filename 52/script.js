// calling Symbol() twice with the same str produces two completely different Symbol values

let s = Symbol('sym_x');

console.log(s.toString()); // Symbol(sym_x)
