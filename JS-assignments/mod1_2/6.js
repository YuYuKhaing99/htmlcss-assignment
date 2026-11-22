let answer = confirm("Is the square root calculated?");

    if (answer == true) {
        let num = prompt("Enter a number:");

        if (num < 0) {
            document.write("The square root of the negative number is not specified");
        } else {
            let result = Math.sqrt(num);
            document.write("The square root is = " + result);
        }
    } else {
        document.write("Square root is not counted");
    }