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
  
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const inputBill = document.querySelector('#input-bill');
    const inputUsers = document.querySelector('#input-users');
    const serviceValue = document.querySelector('#input-service');

    let billAmount = inputBill.value
    let usersAmount = inputUsers.value
    let selectedService = serviceValue.value

    
  })

  
})();