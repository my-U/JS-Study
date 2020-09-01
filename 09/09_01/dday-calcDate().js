var now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듦
var firstDay = new Date("2018-01-04"); // 처음 만난 날의 날짜 정보를 firstDay 객체로 만듦
var toNow = now.getTime();          // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime();   // 처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 차이 (밀리초 값)
// 1일 = 24시간 * 60분 * 60초 * 1000밀리초
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24)); // 밀리초를 날짜 수로 변환한 후 반올림
document.querySelector("#accent").innerText = passedDay + "일";

function calcDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음 만난 날에 100일을 더함
    var someday = new Date(future); // future 값을 사용해 Date 객체의 인스턴스를 만듦
    var year = someday.getFullYear(); // '연도'를 가져와year 변수에 저장
    var month = someday.getMonth() + 1; // '월'을 가져와 month 변수에 저장
    var date = someday.getDate(); // '일'을 가져와 date 변수에 저장
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

calcDate(100)
calcDate(200)
calcDate(365)
calcDate(500)