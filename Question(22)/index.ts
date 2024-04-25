// Task 23: Conditional Tests

// Test 1: Equality comparison
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Output: True

// Test 2: Inequality comparison
let age: number = 25;
console.log("Is age != 30? I predict True.");
console.log(age != 30); // Output: True

// Test 3: Greater than comparison
let num1: number = 10;
let num2: number = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // Output: True

// Test 4: Less than comparison
console.log("Is num2 < num1? I predict True.");
console.log(num2 < num1); // Output: True

// Test 5: Logical AND operator
let x: number = 8;
let y: number = 12;
console.log("Is x > 5 AND y < 15? I predict True.");
console.log(x > 5 && y < 15); // Output: True

// Test 6: Logical OR operator
console.log("Is x > 10 OR y < 10? I predict True.");
console.log(x > 10 || y < 10); // Output: True

// Test 7: Logical NOT operator
let z: boolean = true;
console.log("Is NOT z? I predict False.");
console.log(!z); // Output: False

// Test 8: Equality comparison with type conversion
let numStr: string = '10';
let numInt: number = 10;
console.log("Is numStr == numInt? I predict True.");
console.log(numStr == numInt); // Output: True

// Test 9: Equality comparison without type conversion
console.log("Is numStr === numInt? I predict False.");
console.log(numStr === numInt); // Output: False

// Test 10: Nullish coalescing operator
let username: string | null = null;
let defaultUsername: string = "Guest";
let finalUsername: string = username ?? defaultUsername;
console.log("Final Username:", finalUsername); // Output: "Guest"
