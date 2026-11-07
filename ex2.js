"use strict"

console.log("Hello, World!");

let x = document.querySelector("#result");
x.textContent = "Hello!";


document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInput = document.querySelector("#qty");
    let promoInput = document.querySelector("#promo");
    
    const price = parseInt(priceInput.value);
    const qty = parseInt(qtyInput.value);
    const promo = promoInput.value;
   
    let total = price * qty;

    for (let i =1; i <= qty; i++) {
        console.log(i);
    }

    


    if (promo == "alle") {
        total = total * 0.7;
    }else if (promo ==  "promo2026") {
        total = total * 0.8;
    }

    switch (promo) {
        case "alle":
            total = total * 0.7;
            break;
        case "promo2026":
            total = total * 0.8;
            break;
        default:
            console.log("No promo code.");
    }

    let y = document.querySelector("#result");
    y.textContent = "Total: " + total;
});