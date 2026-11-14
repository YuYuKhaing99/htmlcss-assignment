
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = form.querySelectorAll("input");

    const firstName = inputs[0].value;
    const lastName = inputs[1].value;

    document.getElementById("target").textContent =
        "Nimesi on " + firstName + " " + lastName;
});
