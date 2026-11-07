let numbers = [];
let num;

do {
    num = Number(prompt("Enter a number (or) enter 0 to stop:"));

    if (num !== 0) {
        numbers.push(num);
    }

} while (num !== 0);

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}