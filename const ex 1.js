const PI = 3.14459;
let radius;
let circumference;


document.getElementById("mysubmit").onclick = function() {
    radius= document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference;

    
}