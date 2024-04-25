// Task 26: Alien Colors #2
let alien_color: string = 'green';

// If-else chain to determine points earned based on alien's color
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Version that runs the else block
alien_color = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}
