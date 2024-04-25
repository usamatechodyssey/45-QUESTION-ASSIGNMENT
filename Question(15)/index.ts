// Task 16: More Guests
// Variables
let guests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];

// Print the name of the guest who can't make it
console.log(`${guests[1]} can't make it to dinner.`);

// Replace the name of the guest who can't make it with a new person
guests[1] = "Isaac Newton";

// Print invitation messages to each person in the updated list
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Inform about finding a bigger dinner table
console.log("We found a bigger dinner table!");

// Add new guests
guests.unshift("Muhammad Ali"); // Add to beginning of the array
guests.splice(2, 0, "Fatima Zahra"); // Add to middle of the array
guests.push("Ali Hassan"); // Add to end of the array

// Print invitation messages to each person in the updated list
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
