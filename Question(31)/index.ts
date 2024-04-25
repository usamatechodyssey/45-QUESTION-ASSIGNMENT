// Task 32: Checking Usernames
let current_users: string[] = ['john', 'admin', 'mary', 'alice', 'peter'];
let new_users: string[] = ['alice', 'bob', 'peter', 'jane', 'mark'];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check for uniqueness
for (let user of new_users) {
    let user_lower = user.toLowerCase();
    if (current_users_lower.includes(user_lower)) {
        console.log(`The username "${user}" is already taken. Please choose a different username.`);
    } else {
        console.log(`The username "${user}" is available.`);
    }
}
