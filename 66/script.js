//parseInt() parses only int.
//parseFloat() parses both int and floating-point nums.

console.log(parseInt('3 blind mice')); // => 3
console.log(parseFloat(' 3.14 meters')); // => 3.14
console.log(parseInt('-12.34')); // => -12
console.log(parseInt('0xFF')); // => 255
console.log(parseInt('0xff')); // => 255
console.log(parseInt('-0Xff')); // => -255
console.log(parseFloat('.1')); // => 0.1
console.log(parseInt('0.1')); // => 0
console.log(parseInt('.1')); // => NaN: integers can't start with "."
console.log(parseFloat('$72.47')); // => NaN: numbers can't start with "$"
