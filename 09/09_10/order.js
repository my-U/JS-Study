var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function() { // 체크 박스에 click 이벤트가 발생했을 때 함수 실행
    if(check.checked == true) { // 체크 박스가 체크된다면
        // 주문 정보를 배송 정보에 복사
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
    }
    else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});