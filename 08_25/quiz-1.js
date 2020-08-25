var num1 = parseInt(prompt("숫자1을 입력하세요."));
var num2 = parseInt(prompt("숫자2를 입력하세요."));
var result = sumMulti(num1, num2);

console.log(result);

function sumMulti(){
    if(num1 == num2) {
        var result = num1 * num2;
        return result;
    }
    else {
        var result = num1 + num2;
        return result;
    }
}