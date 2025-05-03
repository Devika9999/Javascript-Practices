 // event listener
   // .addEventListener(event, callback);



const myBox = document.getElementById("myBox");

function changecolor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! ☹️"
}

myBox.addEventListener("click", changecolor);




myBox.addEventListener("mouseover", event => {
     event.target.style.backgroundColor = "yellow";
     event.target.textContent = "Don' t do it 😮"

});



myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click me 😊"

});