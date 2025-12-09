// Operator Associativity

// the subtraction operator has left-to-right associativity, so:
w = x - y - z;

// is the same as:
// w = ((x - y) - z);

// On the other hand, the following expressions:
y = a ** (b ** c);
x = ~-y;
w = x = y = z;
q = a ? b : c ? d : e ? f : g;

// are equivalent to:
// y = (a ** (b ** c));
// x = ~(-y);
// w = (x = (y = z));
// q = a?b:(c?d:(e?f:g));

// because the exponentiation, unary, assignment, and ternary conditional operators have right-to-left associativity.
