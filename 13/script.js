'use strict';

// We can define our own methods, too. The 'this' keyword refers to the object on which the method is defined: in this case, the points array from earlier.

let points = [
  // An array with 2 elements.
  { x: 0, y: 0 }, // Each element is an object.
  { x: 1, y: 1 },
];

// Define a method to compute distance between points
points.dist = function () {
  let p1 = this[0]; // First element of array we're invoked on
  console.log(p1);
  let p2 = this[1]; // Second element of the 'this' object
  console.log(p2);

  let a = p2.x - p1.x; // Difference in x coordinates
  console.log(a);
  let b = p2.y - p1.y; // Difference in y coordinates
  console.log(b);

  return Math.sqrt(
    a * a + // The Pythagorean theorem
      b * b // Math.sqrt() computes the square root
  );
};

console.log(points.dist()); // Math.sqrt(2): distance between our 2 points

// For testing purpose
let z = Math.sqrt(1 + 1);
console.log(z);

/*
ChatGPT

The code you provided defines an array points containing two objects representing points in a Cartesian coordinate system. Then, it defines a method dist() for the points array, which calculates the Euclidean distance between the two points using the Pythagorean theorem.

Here's how it works:

The dist() method is defined for the points array.
Inside the method, it retrieves the two points from the array using this[0] and this[1].
It calculates the differences in x and y coordinates between the two points.
It then uses the Pythagorean theorem (a² + b² = c²) to calculate the distance between the points.
Finally, it returns the computed distance.
When you call points.dist(), it will output the intermediate values and return the computed distance between the two points.

In summary, the points.dist() method calculates the Euclidean distance between two points in a Cartesian coordinate system using the Pythagorean theorem and returns the result.
*/
