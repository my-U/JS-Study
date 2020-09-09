function newRegister() {
    var newP = document.createElement("p"); // 새 p 요소 만들기
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value); // 새 텍스트 노드 만들기
    newP.appendChild(newText); // newText 노드를 newP 노드의 자식 노드로 연결
    var nameList = document.querySelector("#nameList"); // #nameList 가져옴
    // appendChild() 함수는 새로 추가되는 자식 노드가 맨 뒤에 추가됨
    // nameList.appendChild(newP); // newP 노드를 nameList 노드의 자식 노드로 연결
    // 새로운 자식 노드를 기존 자식 노드보다 앞에 추가하기
    nameList.insertBefore(newP, nameList.childNodes[0]);
    // 부모 노드.insertBefore(새로 추가할 자식 노드, 기준이 되는 노드 위치)
    userName.value = ""; // 다음 이름을 입력할 수 있도록 텍스트 필드 비우기
}

