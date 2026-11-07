let dogs = [];

for (let i = 0; i < 6; i++) {
    let name = prompt("Enter a dog's name :");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let ul_list = document.createElement("ul");

for (let i = 0; i < dogs.length; i++) {
    let item = document.createElement("li");
    item.textContent = dogs[i];
    ul_list.appendChild(item);
}

document.body.appendChild(ul_list);