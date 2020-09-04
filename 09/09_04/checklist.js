var itemList = []; // 빈 배열 itemList 생성
var addBtn = document.querySelector("#add"); // #add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList);   // addBtn을 클릭하면 addList 함수 실행
// addList : 준비물을 입력하고 [추가] 버튼을 누를 때마다 배열에 준비물을 추가하는 함수

function addList() {
    var item = document.querySelector("#item").value; // 텍스트 필드의 내용을 가져옴
    if(item != null) {
        itemList.push(item); // itemList 배열 끝에 item 변숫값 추가
        document.querySelector("#item").value = ""; // 준비물을 입력한 후 텍스트 필드의 내용을 지움
        document.querySelector("#item").focus(); // 텍스트 필드의 커서를 다시 활성화
    }
    showList(); // 목록을 표시하는 showList() 함수 실행
}

function showList() {
    var list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
    for(var i = 0; i < itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; //각 요소를 <li> ~ </li>로 묶어 반복
    }
    list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
    document.querySelector("#itemList").innerHTML = list;
    
    var remove = document.querySelectorAll(".close"); // 삭제 버튼을 변수로 저장. 배열의 형태가 됨

    for(var i = 0; i < remove.length; i++) { // remove 배열의 모든 요소 확인
        remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
    }
}

function removeList() {
    // console.log(this); // this 값을 콘솔 창에 표시
    // 객체에서 이벤트가 발생했을 때 그 이벤트의 대상을 알아내야할 경우 자바스크립트의 this 예약어 사용
    // this 예약어는 상황에 따라 다르게 사용되기 때문에 항상 이벤트 발생 요소를 가져오는 것은 아님

    var id = this.getAttribute("id"); //this(누른 삭제 버튼)의 id값을 가져와 id변수에 저장
    // getAttribute() 함수 : 지정한 속성(Attribute)의 값을 가져오는 함수
    itemList.splice(id,1); // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList(); // 변경된 itemList 배열을 다시 화면에 표시
}