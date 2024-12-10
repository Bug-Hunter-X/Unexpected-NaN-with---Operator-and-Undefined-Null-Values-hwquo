function foo(a, b) {
  a = (a === undefined || a === null) ? 0 : a; // Handle undefined and null
  b = (b === undefined || b === null) ? 0 : b; // Handle undefined and null
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(0,1)); //1