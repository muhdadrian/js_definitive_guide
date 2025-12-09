// Of course, if a.b is an object, and if that object has no property named c, then a.b?.c.d will again throw a TypeError, and we will want to use another conditional property access:
let a = { b: {} };
a.b?.c?.d; // => undefined
