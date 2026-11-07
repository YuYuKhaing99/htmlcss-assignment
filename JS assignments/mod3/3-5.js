let numbers = [];
let num;
let same_num = false;

while (!same_num) {
    num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
        alert("This number is already entered!");
        same_num = true;
    } else {
        numbers.push(num);
    }
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}