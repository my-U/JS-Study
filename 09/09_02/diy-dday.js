var now = new Date();
var firstDay = new Date("2018-01-04");

var toNow = now.getTime();
var toFirst = firstDay.getTime();

var PassedDay = Math.round((toNow - toFirst)/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = PassedDay + "일";
