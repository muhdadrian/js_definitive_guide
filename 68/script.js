//Object to Primitive Conversions

//the 1st method is toString()
console.log({ x: 1, y: 2 }.toString()); // => "[object Object]"
console.log([1, 2, 3].toString()); // => "1, 2, 3"
console.log(
  function (x) {
    f(x);
  }.toString(),
); // => "function(x) { f(x); }"
console.log(/\d+/g.toString());

let d = new Date(2024, 11, 2);
console.log(d.toString());

//The other object function conversion is valueOf():

console.log(d.valueOf());

/*
In JavaScript, valueOf() for a Date object returns the number of milliseconds since the Unix epoch (January 1, 1970, UTC).

let d = new Date(2024, 11, 2);
console.log(d.toString());
console.log(d.valueOf());

What does this date represent?
new Date(2024, 11, 2) → month 11 means December (months are 0-indexed).
So the date is:
December 2, 2024 (local time)

What does d.valueOf() return?
d.valueOf() returns the timestamp in milliseconds for that exact date/time.
It is equivalent to:
d.getTime();
+new Date(2024, 11, 2);
*/

/*
Example output (your actual number may vary depending on timezone)

Mon Dec 02 2024 00:00:00 GMT+0800 (Malaysia Time)
1733078400000

1733078400000 = milliseconds since Jan 1, 1970 UTC.
*/

/*
toString() → readable date string
valueOf() → numeric timestamp (ms since epoch)
*/
