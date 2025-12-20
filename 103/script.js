// Order of Evaluation

// JavaScript always evaluates expressions in strictly left-to-right order.

// In the expression w = x + y * z, for example, the subexpression w is evaluated first, followed by x, y, and z. Then the values of y and z are multiplied, added to the value of x, and assigned to the variable or property specified by expression w. Adding parentheses to the expressions can change the relative order of the multiplication, addition, and assignment, but not the left-to-right order of evaluation.

// Arithmetic Expressions

// The basic arithmetic operators are ** (exponentiation), * (multiplication), / (division), % (modulo: remainder after division), + (addition), and - (subtraction).

// The ** operator has higher precedence than *, /, and % (which in turn have higher precedence than + and -). Unlike the other operators, ** works right-to-left, so 2**2**3 is the same as 2**8, not 4**3.

// There is a natural ambiguity to expressions like -3**2. Depending on the relative precedence of unary minus and exponentiation, that expression could mean (-3)**2 or -(3**2). Different languages handle this differently, and rather than pick sides, JavaScript simply makes it a syntax error to omit parentheses in this case, forcing you to write an unambiguous expression. ** is JavaScript’s newest arithmetic operator: it was added to the language with ES2016.

// The Math.pow() function has been available since the earliest versions of JavaScript, however, and it performs exactly the same operation as the ** operator.

// The / operator divides its first operand by its second. If you are used to programming languages that distinguish between integer and floating-point numbers, you might expect to get an integer result when you divide one integer by another. In JavaScript, however, all numbers are floating-point, so all division operations have floating-point results: 5/2 evaluates to 2.5, not 2. Division by zero yields positive or negative infinity, while 0/0 evaluates to NaN: neither of these cases raises an error.

// The % operator computes the first operand modulo the second operand. In other words, it returns the remainder after whole-number division of the first operand by the second operand. The sign of the result is the same as the sign of the first operand. For example, 5 % 2 evaluates to 1, and -5 % 2 evaluates to -1.

// While the modulo operator is typically used with integer operands, it also works for floating-point values. For example, 6.5 % 2.1 evaluates to 0.2.
