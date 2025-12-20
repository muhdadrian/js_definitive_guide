// Both the + operator and the comparison operators behave differently for numeric and string operands. + favors strings: it performs concatenation if either operand is a string. The comparison operators favor numbers and only perform string comparison if both operands are strings:

1 + 2; // => 3: addition.
"1" + "2"; // => "12": concatenation.
"1" + 2; // => "12": 2 is converted to "2".
11 < 3; // => false: numeric comparison.
"11" < "3"; // => true: string comparison.
"11" < 3; // => false: numeric comparison, "11" converted to 11.
"one" < 3; // => false: numeric comparison, "one" converted to NaN.

// note that the <= (less than or equal) and >= (greater than or equal) operators do not rely on the equality or strict equality operators for determining whether two values are “equal.” Instead, the less-than-or-equal operator is simply defined as “not greater than,” and the greater-than-or-equal operator is defined as “not less than.” The one exception occurs when either operand is (or converts to) NaN, in which case, all four comparison operators return false.
