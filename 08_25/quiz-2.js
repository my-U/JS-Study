var num1 = parseInt(prompt("숫자1을 입력하세요."));
var num2 = parseInt(prompt("숫자2를 입력하세요."));
var result = bigger(num1, num2);

function bigger(){
    if(num1 < num2){
        alert(num1 + "보다 " + num2 + "이(가) 더 큽니다.");
    }
    else if(num1 > num2){
        alert(num2 + "보다 " + num1 + "이(가) 더 큽니다.");
    }
    else{
        alert(num1 + "와(과) " + num2 + "은(는) 같습니다.");
    }
}