var radius = document.querySelector("#radius");
var start = document.querySelector("#start");
var round = document.querySelector("#round");
var area = document.querySelector("#area");

start.addEventListener("click", function() {
    round.value = radius.value * 2 * 3.14;
    area.value = radius.value * radius.value * 3.14;
});
