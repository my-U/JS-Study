var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {
        alert("아이디는 4 ~ 15자리의 영문과 숫자여야 합니다.");
        userId.select();
    }
}

function checkPw() {
    if(pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.focus();
        pw1.value = "";
    }
}

function comparePw() {
    if(pw2.value != pw1.value) {
        alert("비밀번호가 같지 않습니다. 다시 입력해주세요.");
        pw2.focus();
        pw2.value = "";
    }
}