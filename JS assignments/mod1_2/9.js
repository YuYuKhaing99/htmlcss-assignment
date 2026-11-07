let num = Number(prompt("Enter a number to check prime number or not:"));
    let Prime_num = true;

    if (num <= 1 || !Number.isInteger(num)) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                Prime_num = false;
                break;
            }
        }
    }

    if (Prime_num) {
        document.write(num + " is a prime number!");
    } else {
        document.write(num + " is not a prime number!");
    }