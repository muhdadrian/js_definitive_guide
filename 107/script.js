// Relational Expressions

// Relational expressions always evaluate to a boolean value, and that value is often used to control the flow of program execution in if, while, and for statements.

// Equality and Inequality Operators

// The == operator is a legacy feature of JavaScript and is widely considered to be a source of bugs. You should almost always use === instead of ==, and !== instead of !=.

// JavaScript objects are compared by reference, not by value. An object is equal to itself, but not to any other object. If two distinct objects have the same number of properties, with the same names and values, they are still not equal. Similarly, two arrays that have the same elements in the same order are not equal to each other.

/* 
Strict equality

The strict equality operator === evaluates its operands, then compares the two values as follows, performing no type conversion:
@ If the two values have different types, they are not equal.
@ If both values are null or both values are undefined, they are equal.
@ If both values are the boolean value true or both are the boolean value false, they are equal.
@ If one or both values is NaN, they are not equal. (This is surprising, but the NaN value is never equal to any other value, including itself! To check whether a value x is NaN, use x !== x, or the global isNaN() function.)
@ If both values are numbers and have the same value, they are equal. If one value is 0 and the other is -0, they are also equal.
@ If both values are strings and contain exactly the same 16-bit values in the same positions, they are equal. If the strings differ in length or content, they are not equal. Two strings may have the same meaning and the same visual appearance, but still be encoded using different sequences of 16-bit values. JavaScript performs no Unicode normalization, and a pair of strings like this is not considered equal to the === or == operators.
@ If both values refer to the same object, array, or function, they are equal. If they refer to different objects, they are not equal, even if both objects have identical properties.
*/

// Equality with type conversion
// The equality operator == is like the strict equality operator, but it is less strict.
// If the values of the two operands are not the same type, it attempts some type conversions and tries the comparison again.

// As an example of testing for equality, consider the comparison:
"1" == true; // => true

// This expression evaluates to true, indicating that these very different-looking values are in fact equal. The boolean value true is first converted to the number 1, and the comparison is done again. Next, the string "1" is converted to the number 1. Since both values are now the same, the comparison returns true.
