var button = document.querySelector("button");
var body = document.querySelector("body");
var color = ['red', 'yellow', 'brown', 'white', 'green', 'blue', 'skyblue', 'violet'];
body.style.backgroundColor = 'violet';

button.addEventListener("click", changeBG);

function changeBG() {
 var i = parseInt(Math.random() * color.length);
 body.style.backgroundColor = color[i];
};