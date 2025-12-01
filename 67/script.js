//parseInt() accepts an optional second arg specifying the radix (base) of the number to be parsed. Legal values are between 2 and 36:

console.log(parseInt("11", 2)); // => 3: (1*2 + 1)
console.log(parseInt("ff", 16)); // => 255: (15*16 + 15)
console.log(parseInt("zz", 36)); // => 1295: (35*36 + 35)
console.log(parseInt("077", 8)); // => 63: (7*8 + 7)
console.log(parseInt("077", 10)); // => 77: (7*10 + 7)
