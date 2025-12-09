// Object-to-primitive conversion algorithms

// With the toString() and valueOf() methods explained, we can now explain approximately how the three object-to-primitive algorithms work:

/*
The prefer-string algorithm first tries the toString() method. If the method is defined and returns a primitive value, then JavaScript uses that primitive value (even if it is not a
string!).

If toString() does not exist or if it returns an object,then JavaScript tries the valueOf() method. If that method exists and returns a primitive value, then JavaScript uses that
value. Otherwise, the conversion fails with a TypeError.
*/

/*
The prefer-number algorithm works like the prefer-string algorithm, except that it tries valueOf() first and toString() second.
*/

/*
The no-preference algorithm depends on the class of the object being converted. If the object is a Date object, then JavaScript uses the prefer-string algorithm. For any other object, JavaScript
uses the prefer-number algorithm.

The rules described here are true for all built-in JavaScript types and are the default rules for any classes you define yourself.
*/

/*
Before we leave this topic, it is worth noting that the details of the prefer-number conversion explain why empty arrays convert to the number 0 and single-element arrays can also convert to numbers:
*/

Number([]); // => 0: this is unexpected!
Number([99]); // => 99: really?

// console.log(Number([99]));

/*
The object-to-number conversion first converts the object to a primitive using the prefer-number algorithm, then converts the resulting primitive value to a number. The prefer-number algorithm
tries valueOf() first and then falls back on toString().

But the Array class inherits the default valueOf() method, which does not return a primitive value. So when we try to convert an array to a number, we end up invoking the toString() method of the array. Empty arrays convert to the empty string. And the empty string converts to the number 0. An array with a single element converts to the same string that that one element does. If an array contains a single number, that number is converted to a string, and then back to a number.
*/
