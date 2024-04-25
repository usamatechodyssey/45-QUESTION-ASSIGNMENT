// Task 22: Intentional Error
// Variables
let numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an index that doesn't exist to produce an error
// Change the index to 10 (which doesn't exist)
console.log(numbers[10]); // This line intentionally causes an index error

// Correct the error by accessing a valid index
console.log(numbers[2]); // This line accesses a valid index
