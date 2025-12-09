// Variable Declarations with var

/*In versions of JavaScript before ES6, the only way to declare a variable is with the var keyword, and there is no way to declare constants. The syntax of var is just like the syntax of let:*/

var x;
var data = [],
  count = data.length;
for (var i = 0; i < count; i++) console.log(data[i]);

// use let instead of var
