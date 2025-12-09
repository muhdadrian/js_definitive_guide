// Variable and constant scope

// The scope of a variable is the region of your program source code in which it is defined.

// Variables and constants declared with let and const are block scoped. This means that they are only defined within the block of code in which the let or const statement appears.
// JavaScript class and function definitions are blocks, and so are the bodies of if/else statements, while loops, for loops, and so on.
// Roughly speaking, if a variable or constant is declared within a set of curly braces, then those curly braces delimit the region of code in which the variable or constant is defined (though of course it is not legal to reference a variable or constant from lines of code that execute before the let or const statement that declares the variable).
// Variables and constants declared as part of a for, for/in, or for/of loop have the loop body as their scope, even though they technically appear outside of the curly braces.

// When a declaration appears at the top level, outside of any code blocks, we say it is a global variable or constant and has global scope.
// In Node and in client-side JavaScript modules, the scope of a global variable is the file that it is defined in. In traditional client-side JavaScript, however, the scope of a global variable is the HTML document in which it is defined. That is: if one <script> declares a global variable or constant, that variable or constant is defined in all of the <script> elements in that document (or at least all of the scripts that execute after the let or const statement executes).
