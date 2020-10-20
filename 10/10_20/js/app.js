(function(){
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

})();