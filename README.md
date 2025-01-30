# JavaScript Type Coercion Pitfall: Unexpected String Concatenation
This example demonstrates a common JavaScript pitfall where the loose type system leads to unexpected string concatenation instead of the intended numerical addition.  The function `foo` attempts to add a number and a string. JavaScript implicitly converts the number to a string and performs string concatenation rather than throwing an error or performing numerical addition. This behavior is often a source of subtle bugs that are difficult to track down.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`