// Declarations with let and const

// In modern JavaScript (ES6 and later), variables are declared with the let keyword, like this:

let i;
let sum;

// You can also declare multiple variables in a single let statement:

let i, sum;

// It is a good programming practice to assign an initial value to your variables when you declare them, when this is possible:

let message = "hello";
let i = 0,
  j = 0,
  k = 0;
let x = 2,
  y = x * x; // Initializers can use previously declared variables

// If you don’t specify an initial value for a variable with the let statement, the variable is declared, but its value is undefined until your code assigns a value to it.

// To declare a constant instead of a variable, use const instead of let. const works just like let except that you must initialize the constant when you declare it:

const H0 = 74; // Hubble constant (km/s/Mpc)
const C = 299792.458; // Speed of light in a vacuum (km/s)
const AU = 1.496e8; // Astronomical Unit: distance to the sun (km)

// As the name implies, constants cannot have their values changed, and any attempt to do so causes a TypeError to be thrown.

// It is a common (but not universal) convention to declare constants using names with all capital letters such as H0 or HTTP_NOT_FOUND as a way to distinguish them from variables.
