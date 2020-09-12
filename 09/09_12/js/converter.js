var cTem = document.querySelector("#s-value");
var cUnit = document.querySelector("#s-unit");
var fTem = document.querySelector("#t-value");
var fUnit = document.querySelector("#t-unit");
var CoF = true;

var h2 = document.getElementsByTagName("h2");
var exchange = document.querySelector("#exchange");

function exChange() {
    cTem.value = "";
    fTem.value = "";

    if(CoF) {
        CoF = false;
        cUnit.innerHTML = "&#8451;"
        fUnit.innerHTML = "&#8457;"
    }
    else {
        CoF = true;
        cUnit.innerHTML = "&#8457;"
        fUnit.innerHTML = "&#8451;"
    }
}

function converter() {
    if(CoF) {
        fTem.value = (cTem.value * 1.8 + 32).toFixed(2);
    }
    else {
        fTem.value = ((cTem.value - 32) / 1.8).toFixed(2);
    }
}
