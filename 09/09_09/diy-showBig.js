var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");
for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", showBig);
}

function showBig() {
    newPic = this.src;
    bigPic.setAttribute("src", newPic);
}

