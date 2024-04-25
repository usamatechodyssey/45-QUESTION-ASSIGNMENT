// Task 33: Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalSuffix: string;

// Loop through the array and print ordinal numbers
for (let num of numbers) {
    switch (num) {
        case 1:
            ordinalSuffix = 'st';
            break;
        case 2:
            ordinalSuffix = 'nd';
            break;
        case 3:
            ordinalSuffix = 'rd';
            break;
        default:
            ordinalSuffix = 'th';
            break;
    }
    console.log(`${num}${ordinalSuffix}`);
}
