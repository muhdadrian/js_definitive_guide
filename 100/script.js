w = x + y * z;

// The multiplication operator * has a higher precedence than the addition operator +, so the multiplication is performed before the addition. Furthermore, the assignment operator = has the lowest precedence, so the assignment is performed after all the operations on the right side are completed.

// Operator precedence can be overridden with the explicit use of parentheses. To force the addition in the previous example to be performed first, write:

w = (x + y) * z;
