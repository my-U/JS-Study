(function() {
  const Btns = document.querySelectorAll(".counterBtn")
  var num = 0

  Btns.forEach(function(button) { // 배열 각각의 함수를 나타냄. 각 요소를 button으로 지칭
    button.addEventListener("click", function() {
      if(button.classList.contains('prevBtn')) { // class중에 prevBtn이 포함되어 있다면 다음 코드 실행
        num--
      }
      else if(button.classList.contains('nextBtn')){
        num++
      }

      const counter = document.querySelector("#counter")
      counter.textContent = num

      if (num > 0) {
        counter.style.color = 'green'
      }
      else if (num < 0) {
        counter.style.color = 'red'
      }
      else {
        counter.style.color = '#333333'
      }
    })
  })



})()