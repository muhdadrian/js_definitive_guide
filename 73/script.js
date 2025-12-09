// Repeated declarations

// It is a syntax error to use the same name with more than one let or const declaration in the same scope. It is legal (though a practice best avoided) to declare a new variable with the same name in a nested scope:

const x = 1; // Declare x as a global constant
if (x === 1) {
  let x = 2; // Inside a block x can refer to a different value
  console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now
let x = 3; // ERROR! Syntax error trying to re-declare x
