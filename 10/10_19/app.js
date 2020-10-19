(function() {
  let screen = document.querySelector('.screen')
  let buttons = document.querySelectorAll('.btn')
  let equal = document.querySelector('.btn-equal')
  let clear = document.querySelector('.btn-clear')

  buttons.forEach(function(button) {
    button.addEventListener('click', (e) => {
      let text = e.target.dataset.num
      screen.value += text
    })
  })

  equal.addEventListener('click', (e) => {
    if(screen.value == '') {
      screen.value = 'Please Enter a Value'
    }
    else {
      let answer = eval(screen.value) // 문자로 된 수학공식을 계산하는 함수
      screen.value = answer
    }
  })

  clear.addEventListener('click', (e) => {
    screen.value = ''
  })

})()