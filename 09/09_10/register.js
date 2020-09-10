var userId = document.querySelector("#user-id");
userId.onchange = checkId; // 해당 요소에 change 이벤트가 발생하면 checkId() 함수 실행
function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15) {// userId 필드 내용의 길이가 4 이하이거나 15 이상일 경우 실행
        alert("4 ~ 15자리의 영문과 숫자를 입력하세요."); // 오류메세지 출력
        userId.select(); // 다시 입력할 수 있도록 userId 필드 선택
    }
}
