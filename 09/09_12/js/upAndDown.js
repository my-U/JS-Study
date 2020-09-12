var num = Math.floor(Math.random() * 100) + 1
var putNum = document.querySelector("#try");
var output = document.querySelector("#display");
var footer = document.querySelector("#counter");
var count = 0;

function finding() {
    if(putNum.value > 100) {
        alert("1과 100사이의 숫자를 입력하세요.");
        putNum.value = "";
    }
    else {
        if(num > putNum.value) {
            output.innerHTML = "Up!";
        }
        else if (num < putNum.value) {
            output.innerHTML = "Down!";
        }
        else {
            output.innerHTML = "정답입니다!";
            footer.innerHTML = "시도 횟수 : " + count;
        }
        count++;
    }

    
}