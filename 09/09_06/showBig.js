var bigPic = document.querySelector("#cup"); // 큰 이미지 가져옴
var smallPics = document.querySelectorAll(".small"); // 작은 이미지를 가져옴(노드 리스트)

for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = showBig; // 요소를 누르면 showBig() 함수 실행
}

function showBig() {
    var newPic = this.src; // click 이벤트가 발생한 대상의 src 속성값 가져옴
    bigPic.setAttribute("src", newPic); // newPic 값을 큰 이미지의 src 속성에 할당
}