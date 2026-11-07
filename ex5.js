

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
    newParagraph.addEventListener("click", deleteBox);
    box.appendChild(newParagraph);
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", startmakingboxes);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopmakingboxes);

let heading = document.getElementById("main-heading");
console.log(heading);

let paragraph = document.getElementsByTagName("p");
console.log(paragraph);



