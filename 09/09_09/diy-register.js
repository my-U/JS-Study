function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);
    // nameList.appendChild(newP); // 명단의 맨 뒤에 자식 노드 추가

    var span = document.createElement("span");
    var delBtn = document.createTextNode("X");
    span.setAttribute("class", "del");
    span.appendChild(delBtn);
    newP.appendChild(span);
    var delBttn = document.querySelectorAll(".del");
    for(var i = 0; i < delBttn.length; i++) {
        delBttn[i].addEventListener("click", removeChild);
    }
    userName.value = "";
}

function removeChild() {
    if(this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}