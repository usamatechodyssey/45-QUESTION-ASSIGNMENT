// Task 37: Large Shirts
function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {
  console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function with different parameters
make_shirt(); // Default values
make_shirt('medium'); // Custom size with default message
make_shirt('small', 'Hello World'); // Custom size and message
