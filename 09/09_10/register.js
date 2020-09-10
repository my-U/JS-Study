var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId; // 해당 요소에 change 이벤트가 발생하면 checkId() 함수 실행
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {// userId 필드 내용의 길이가 4 이하이거나 15 이상일 경우 실행
        alert("4 ~ 15자리의 영문과 숫자를 입력하세요."); // 오류메세지 출력
        userId.select(); // 다시 입력할 수 있도록 userId 필드 선택
    }
}

function checkPw() {
    if(pw1.value.length <8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus(); // 비밀번호를 다시 입력할 수 있도록 포커싱
    }
}

function comparePw() {
    if(pw2.value != pw1.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus();
    }
}