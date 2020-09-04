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
        list += "<li>" + itemList[i] + "</li>"; //각 요소를 <li> ~ </li>로 묶어 반복
    }
    list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
    
    document.querySelector("#itemList").innerHTML = list;
}

