// Define the show_magicians function
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
      console.log(magician);
  }
}

// Task 43: Unchanged Magicians
let original_magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Dynamo'];

// Create a function to make magicians "the Great"
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
      great_magicians.push(`the Great ${magician}`);
  }
  return great_magicians;
}

// Call the function with a copy of the original magicians list
let great_magicians: string[] = make_great([...original_magicians]);

// Show the original magicians list
console.log("Original Magicians:");
show_magicians(original_magicians);

// Show the updated magicians list with "the Great"
console.log("Great Magicians:");
show_magicians(great_magicians);
