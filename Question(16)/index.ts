// Task 17: Shrinking Guest List
// Variables
let guests: string[] = [
  "Albert Einstein",
  "Leonardo da Vinci",
  "Marie Curie",
  "Muhammad Ali",
  "Fatima Zahra",
  "Ali Hassan",
];

// Print a message about inviting only two people for dinner
console.log("Due to limited space, we can invite only two people for dinner.");

// Remove guests one at a time until only two names remain
while (guests.length > 2) {
  let removedGuest = guests.pop(); // Remove last guest
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the two remaining guests
guests.forEach(guest => {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// Empty the list by removing the last two names
guests.pop();
guests.pop();

// Print the empty list to confirm
console.log(guests); // Output: []
