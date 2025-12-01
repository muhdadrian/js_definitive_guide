'use strict';

// Here is a very simple example that demonstrates how to define a JS class to represent 2D geometric points. Objects that are instances of this class have a single method, named distance(), that computes the distance of the point from the origin:

// By convention, class names are capitalized.
class Point {
  // Constructor function to initialize new instances.
  constructor(x, y) {
    this.x = x; // This keyword is the new object being initialized.
    this.y = y; // Store function arguments as object properties.
  } // No return is necessary in constructor functions.

  // Method to compute distance from origin to point.
  // Return the square root of x2 + y2.
  // this at below refers to the Point object on which the distance method is invoked.
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Use the Point() constructor function with "new" to create Point objects
let p = new Point(1, 1); // The geometric point (1, 1).

// Now use a method of the Point object p
console.log(p.distance()); // => Math. SQRT2
