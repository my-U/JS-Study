function newRegister() {
    var newP = document.createElement("p"); // 새 p 요소 만들기
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
    newP.appendChild(newText); // newText 노드를 newP 노드의 자식 노드로 연결
    var nameList = document.querySelector("#nameList"); // #nameList 가져옴
    nameList.appendChild(newP); // newP 노드를 nameList 노드의 자식 노드로 연결
    userName.value = ""; // 다음 이름을 입력할 수 있도록 텍스트 필드 비우기
}

