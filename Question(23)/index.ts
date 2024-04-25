// Task 24: More Conditional Tests

// Tests for equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'world';
console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2); // Output: False

// Tests using the lower case function
let text: string = 'HELLO';
console.log("Is text.toLowerCase() == 'hello'? I predict True.");
console.log(text.toLowerCase() == 'hello'); // Output: True

// Numerical tests
let num1: number = 10;
let num2: number = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // Output: True

// Tests using "and" and "or" operators
let condition1: boolean = true;
let condition2: boolean = false;
console.log("Is condition1 && condition2? I predict False.");
console.log(condition1 && condition2); // Output: False

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
let fruitToCheck: string = "banana";
console.log(`Is ${fruitToCheck} in fruits? I predict True.`);
console.log(fruits.includes(fruitToCheck)); // Output: True

// Test whether an item is not in an array
let animalToCheck: string = "cat";
console.log(`Is ${animalToCheck} not in fruits? I predict True.`);
console.log(!fruits.includes(animalToCheck)); // Output: True
