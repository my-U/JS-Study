const form = document.querySelector('#message-form')

form.addEventListener("submit", function(e) { // 폼안에 input태그들이 포함되어 있음
    e.preventDefault() // 취소 가능한 경우 이벤트를 취소. 즉, 이벤트에 속한 기본 작업이 발생하지 않음

    const message = document.querySelector("#message")
    const feedback = document.querySelector(".feedback")
    const showText = document.querySelector(".text-uppercase")

    if(message.value == '') {
        feedback.classList.add('show') // h5의 내용을 보여줌
        setTimeout(function(){
            feedback.classList.remove('show') // h5를 2초뒤에 지움
        }, 2000)
    }
    else {
        showText.textContent = message.value
        message.value = ''
    }
})