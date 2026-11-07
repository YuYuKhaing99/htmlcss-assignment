const names = [];
for (let i = 0; i < 5; i++) {
    const name = prompt("Enter your name:");
    names.push(name);
}

for (const name of names) {
    document.getElementById("result").innerHTML +=
    name + "<br>";
}

document.getElementById("result").innerHTML +=("first name: " + names[0]+ "<br>" );
names.reverse();
document.getElementById("result").innerHTML +=("last name: " + names[0]+ "<br>" );
names.pop();
for (const name of names) {
    document.getElementById("result").innerHTML +=
    name + "<br>";
}

    
