var now = new Date();
var firstDay = new Date("2018-01-04");

var toNow = now.getTime();
var toFirst = firstDay.getTime();

var PassedDay = Math.round((toNow - toFirst)/(1000 * 60 * 60 * 24));

document.querySelector("#accent").innerText = PassedDay + "일";

function calcDate(days){
    var future = toFirst + days * 1000 * 60 * 60 * 24;
    var someday = new Date(future);
    year = someday.getFullYear();
    month = someday.getMonth() + 1;
    date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "일 " + month + "월 " + date + "일";
}

calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)