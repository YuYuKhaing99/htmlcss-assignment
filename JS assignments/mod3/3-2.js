let participants = [];

let total = Number(prompt("Enter the number of participants?"));

for (let i = 0; i < total; i++) {
    let name = prompt("Enter a participant's name:");
    participants.push(name);
}

participants.sort();

let orderedlist = document.createElement("ol");

for (let i = 0; i < participants.length; i++) {
    let item = document.createElement("li");
    item.textContent = participants[i];
    orderedlist.appendChild(item);
}

document.body.appendChild(orderedlist);