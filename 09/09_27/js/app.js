var body = document.querySelector("body")
var btn = document.querySelector("#btn")
var hexColor = document.querySelector("#hex-value")
var hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


btn.addEventListener("click", changeBG)


function changeBG() {
    hex = "#"

    for(var i = 0; i < 6; i++) {
        var index = parseInt(Math.random() * hexArray.length)
        hex += hexArray[index]
    }

    hexColor.innerHTML = hex
    body.style.backgroundColor = hex

}
