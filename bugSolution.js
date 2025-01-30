function foo(a, b) {
  // Explicit type checking before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    // Handle cases where inputs are not numbers, for example throwing error or returning NaN
    console.error("Error: Both parameters must be numbers.");
    return NaN;
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: Error: Both parameters must be numbers. NaN 