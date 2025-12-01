// Conversions and Equality

// The "strict equality operator" (===) does not consider its operands to be equal if they are not of the same type. This is the right operator to use when coding.
// JS is flexible in with type conversions, it also defines the == operator with a flexible definition of equality.

console.log(null == undefined); //true: These two values are treated equal.

console.log('0' == 0); //true: Str converts to a number before comparing.

console.log(0 == false); //true: Bool converts to number before comparing

console.log('0' == false); //true: Both operands convert to 0 before comparing!
