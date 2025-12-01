// Template Literals

// ES6 has one built-in tag function: String.raw(). It returns the text within backticks without any processing of backslash escapes:

`\n`.length; //the string has a single newline char
console.log(`\n`.length);
String.raw`\n`.length; // a backslash char and the letter n
console.log(String.raw`\n`.length);

// The tag portion of a tagged template literal is a function, there are no parentheses used in its invocation. In this very specific case, the backtick chars replace the open and close parentheses.
