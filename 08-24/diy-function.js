var num1 = parseInt(prompt("숫자1을 입력하세요."));
var num2 = parseInt(prompt("숫자2을 입력하세요."));
var result = add(num1,num2); // sum의 값을 result에 저장함으로써 전역변수로 사용가능.

function add(a, b){
    var sum = a + b; // 지역변수 sum 선언
    return sum;
};

document.write("두 숫자의 합은 " + result + "입니다.");