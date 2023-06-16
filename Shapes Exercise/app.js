let triangle = document.getElementById("triangle-up");
let circle = document.getElementById("circle");
let square = document.getElementById("square");

triangle.onclick = function(){
    triangle.style.display="none";
}
circle.onclick = function(){
    circle.style.display="none";
}
square.onclick = function(){
    square.style.display="none";
}

let btn = document.getElementById("btn");

btn.onclick = function(){
    triangle.style.display="inline-block";
    square.style.display="inline-block";
    circle.style.display="inline-block";
}