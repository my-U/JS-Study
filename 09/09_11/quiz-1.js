var sum = 24000;

var orderList = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");

for(var i = 0; i < orderList.length; i++) {
    orderList[i].addEventListener("click", function() {
        if(this.checked == true) {
            sum += parseInt(this.value);
        }
        else {
            sum -= parseInt(this.value);
        }
        total.value = sum + "원";
    });
}