(function() { // 버튼 클릭
    const buttons = document.querySelectorAll(".btn")
    const items = document.querySelectorAll(".store-item")

    buttons.forEach(function(button) {
        button.addEventListener("click", (e) => { // e : event(?)
            e.preventDefault(); // 페이지의 기본 동작 제어

            const filter = e.target.dataset.filter // data - 이름, dataset으로 뒤의 이름선택
            

            items.forEach(function(item) { // item은 items에 들어있는 정보들 중 하나
                if(filter === 'all') {
                    item.style.display = "block"
                }
                else{
                    if(item.classList.contains(filter)) {
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display = 'none'
                    }
                }
            })

        })
    })
})();

(function() { // 검색 입력
    const items = document.querySelectorAll(".store-item")
    const search = document.querySelector("#search-item")

    search.addEventListener('keyup', function(e) {
       
        // 검색창에서 넘어오는 정보를 담을 변수
        const searchItem = e.target.value.toLowerCase().trim() // toLowerCase : 입력된 데이터를 소문자로 취급, trim() : 문자열 양쪽의 공백 제거

        items.forEach(function(item) { // item은 items에 들어있는 정보들 중 하나
            if(item.textContent.includes(searchItem)) { // item의 textContent에 입력받은 값이 포함되어 있다면
                item.style.display = 'block'
            }
            else{
                item.style.display = 'none'
            }
            
        })
    })
})();