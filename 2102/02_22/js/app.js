const $cartBtn = document.querySelector("#cart-info");
const $cart = document.querySelector("#cart");
const $cartIcon = document.querySelector(".store-item-icon");

function init() {
    $cartBtn.addEventListener('click', ShowCart);
}

const ShowCart = () => {
    $cart.classList.toggle("show-cart");
}

init();