function openPop() {
    var newWin = window.open("popup.html", "", "width=400, height=400");
    if(newWin == null) {// 팝업이 차단되어 있다면 window.open()은 null값을 반환
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침 해주세요.");
    }
}

window.onload = openPop();