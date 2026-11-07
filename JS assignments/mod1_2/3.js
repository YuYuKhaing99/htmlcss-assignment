const num1 = Number(prompt("Enter your first integer:"));
const num2 = Number(prompt("Enter your second integer:"));
const num3 = Number(prompt("Enter your third integer:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.getElementById("result").innerHTML =
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average;