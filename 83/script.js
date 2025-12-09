// The next example copies global functions of the Math object into variables, which might simplify code that does a lot of trigonometry:

// Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const { sin, cos, tan } = Math;

// Notice in the code here that the Math object has many properties other than the three that are destructured into individual variables. Those that are not named are simply ignored. If the lefthand side of this assignment had included a variable whose name was not a property of Math, that variable would simply be assigned undefined.

// In each of these object destructuring examples, we have chosen variable names that match the property names of the object we’re destructuring. This keeps the syntax simple and easy to understand, but it is not required. Each of the identifiers on the lefthand side of an object destructuring assignment can also be a colon-separated pair of identifiers, where the first is the name of the property whose value is to be assigned and the second is the name of the variable to assign it to:

// Same as const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;

// I find that object destructuring syntax becomes too complicated to be useful when the variable names and property names are not the same, and I tend to avoid the shorthand in this case. If you choose to use it, remember that property names are always on the left of the colon, in both object literals and on the left of an object destructuring assignment.
