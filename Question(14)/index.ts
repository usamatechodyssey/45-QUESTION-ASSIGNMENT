// Task 15: Changing Guest List
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
