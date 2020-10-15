(function() {
  const img = document.querySelector(".img-container")
  const buttons = document.querySelectorAll(".btn")
  const list = ["contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3", "contBcg-4"];
  let num = 0
  
  buttons.forEach(function(button){
    button.addEventListener("click", function(e) {
      if(button.classList.contains('btn-left')) {
        num--
        if(num < 0) {
          num = list.length - 1
        }
        img.style.backgroundImage = 'url('+'img/'+list[num]+'.jpeg'+')'
      }
      else if(button.classList.contains('btn-right')) {
        num++
        if(num > list.length - 1) {
          num = 0
        }
        img.style.backgroundImage = `url('img/${list[num]}.jpeg')` // 제이쿼리
      }
    })
  })

})();