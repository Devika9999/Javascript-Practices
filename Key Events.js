// Key Events

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});