// Define the show_magicians function
function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
      console.log(magician);
  }
}

// Task 42: Great Magicians
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
      great_magicians.push(`the Great ${magician}`);
  }
  return great_magicians;
}

// Original magicians list
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller', 'Dynamo'];
console.log("Original Magicians:");
show_magicians(magicians);

// Modify the magicians list
magicians = make_great(magicians);

// Updated magicians list with "the Great"
console.log("Updated Magicians:");
show_magicians(magicians);
