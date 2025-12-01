/*
JS Dates are objects, but they also have a numeric representation as a timestamp that specifies the number of elapsed milliseconds since January 1, 1970: 
*/

let timestamp = Date.now(); //The current time as a timestamp (a number).
console.log(timestamp);

let now = new Date(); //The current time as a Date object.
console.log(now);

let ms = now.getTime();
console.log(ms); // Convert to a millisecond timestamp.

let iso = now.toISOString(); // Convert to a string in standard format.
console.log(iso);
