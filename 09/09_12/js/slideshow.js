var img = document.querySelectorAll("#container > img");
var preBt = document.querySelector("#prev");
var nxtBt = document.querySelector("#next");
var current = 0;

preBt.onclick = preSlide;
nxtBt.onclick = nxtSlide;
showSlide(current);

function showSlide(n) {
    for(var i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    img[n].style.display = "block";
}

function preSlide() {
    if(current > 0) current -= 1;
    else current = img.length -1;
    showSlide(current);
}

function nxtSlide() {
    if(current < img.length -1) current += 1;
    else current = 0;
    showSlide(current);
}
