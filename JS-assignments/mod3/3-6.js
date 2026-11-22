function roll_Dice() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
let ul_list = document.createElement("ul");

do {
    result = roll_Dice();
    let item = document.createElement("li");
    item.textContent = result;
    ul_list.appendChild(item);

} while (result !== 6);

document.body.appendChild(ul_list);