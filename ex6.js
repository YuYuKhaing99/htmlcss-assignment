

function startmakingboxes() {
    console.log("Start making boxes");
    timerID = setInterval(timerAction, 2000);
}

function stopmakingboxes() {
    console.log("Stop making boxes");
    clearInterval(timerID);
}

function deleteBox(event) {
    let parentDiv = event.currentTarget.parentElement;
    parentDiv.removeChild(event.currentTarget);
}

function timerAction() {
    let box = document.querySelector(".box");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "I am a new paragraph!";
    newParagraph.setAttribute("class", "div-green");
    box.appendChild(newParagraph);
}
let heading = document.getElementById("main-heading");
console.log(heading);

let paragraph = document.getElementsByTagName("p");
console.log(paragraph);


let stopBoxes = document.documentElement.clientHeight;
for (let i = 0; i < stopBoxes; i++) {
    startmakingboxes();
}
stopmakingboxes();
deleteBox();




