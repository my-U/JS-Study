/*(function(){
  let bill = document.querySelector('#input-bill')
  let users = document.querySelector('#input-users')
  let service = document.querySelector('#input-service')
  let form = document.querySelector('#tip-form')

  form.addEventListener('submit', function() {
    const tipAmount = document.querySelector('#tip-amount')
    const totalAmount = document.querySelector('#total-amount')
    const personAmount = document.querySelector('#person-amount')

    let tip = parseInt(bill.value) / 
    let total = parseInt(bill.value) + tip

    tipAmount.textContent = tip
    totalAmount.textContent = total
    personAmount.textContent = users.value

    // null값이 들어갔을 시
    if(bill.value == '') {

    }
    else if(users.value == '') {

    }
    else if(service.value == '') {

    }
  }) // 모르겠다

})();*/

(function() {
  const services = [ // 드롭다운 리스트
    {
      value : 1,
      title : 'great - 20%'
    },
    {
      value : 2,
      title : 'good - 10%'
    },
    {
      value : 3,
      title : 'bad - 2%'
    }
  ]  
  
  services.forEach(function(service) { // 리스트에 저장되어 있는 데이터가 드롭다운의 값으로 만들어짐
    const option = document.createElement('option')
    const select = document.querySelector('#input-service')

    option.value = service.value
    option.textContent = service.title

    select.appendChild(option)
  })

  function validateInput(billAmount, usersAmount, selectedService) { // 값이 유효한지 확인하는 함수
    let isFeedback = false
    const feedback = document.querySelector('.feedback') // 빈값이 넘어갔을 경우 경고 메세지가 뜨는 공간
    feedback.innerHTML = ''

    if(billAmount === '' || billAmount <= '0') {
      feedback.classList.add('showItem', 'alert-danger')
      feedback.innerHTML += '<p>음식값을 입력해주세요.</p>'
      isFeedback = true
    }

    if(usersAmount === '' || usersAmount <= '0') {
      feedback.classList.add('showItem', 'alert-danger')
      feedback.innerHTML += '<p>인원수를 입력해주세요.</p>'
      isFeedback = true
    }

    if (selectedService === "0"){
      feedback.classList.add('showItem', 'alert-danger');
      feedback.innerHTML += `<p>서비스를 선택해주세요.</p>`
       isFeedback = true;
    }

    setTimeout(function() {
      feedback.classList.remove('showItem', 'alert-danger')
    }, 10000) // 10초 후 경고메세지 삭제
  }
  
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', function(e) { // 폼에서 값이 넘어가면

    e.preventDefault();

    const inputBill = document.querySelector('#input-bill');
    const inputUsers = document.querySelector('#input-users');
    const serviceValue = document.querySelector('#input-service');

    let billAmount = inputBill.value
    let usersAmount = inputUsers.value
    let selectedService = serviceValue.value

    const isFeedback = validateInput(billAmount, usersAmount, selectedService)

    
  })

  
})();