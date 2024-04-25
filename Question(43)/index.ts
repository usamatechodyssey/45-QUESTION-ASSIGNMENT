// Task 44: Sandwiches
function make_sandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:");
  for (let item of items) {
      console.log(item);
  }
  console.log("Sandwich is ready!");
}

// Call the function with different numbers of arguments
make_sandwich('bread', 'cheese', 'ham');
make_sandwich('bread', 'lettuce', 'tomato', 'mayo');
make_sandwich('baguette', 'chicken', 'avocado', 'bacon', 'lettuce', 'tomato', 'onion');
