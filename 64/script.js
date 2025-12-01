// Explicit Conversions

/*
- The toString() method defined by the Number class accepts an optional arg that specifies a radix, or base, for the conversion.
- If you do not specify the arg, the conversion is done in base 10.
- However, you can also convert numbers in other bases (between 2 and 36).
*/

let n = 17;
let binary = '0b' + n.toString(2);
console.log(binary); // binary == "0b10001"
let octal = '0o' + n.toString(8);
console.log(octal); // octal == "0o21"
let hex = '0x' + n.toString(16);
console.log(hex); // hex == "0x11"
