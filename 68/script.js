//Object to Primitive Conversions

//the 1st method is toString()
console.log({ x: 1, y: 2 }.toString()); // => "[object Object]"
console.log([1, 2, 3].toString()); // => "1, 2, 3"
console.log(
  function (x) {
    f(x);
  }.toString()
); // => "function(x) { f(x); }"
console.log(/\d+/g.toString());

let d = new Date(2024, 11, 2);
console.log(d.toString());

//The other object function conversion is valueOf():

console.log(d.valueOf());
