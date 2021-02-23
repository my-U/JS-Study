const $cartBtn = document.querySelector("#cart-info");
const $cart = document.querySelector("#cart");
const $cartIcons = document.querySelectorAll(".store-item-icon");
const $totalContainer = document.querySelector(".cart-total-container");
const $totalPrice = document.querySelector("#cart-total");
const $itemCount = document.querySelector("#item-count");
const $itemTotal = document.querySelector(".item-total");

function init() {
    $cartBtn.addEventListener('click', ShowCart);
    $cartIcons.forEach((cartIcon) => {
        cartIcon.addEventListener("click", AddCartItem);
    })
}

const ShowCart = () => {
    $cart.classList.toggle("show-cart");
}

const AddCartItem = ({target}) => {
    alert("Item added to the cart.");

    if(target.parentElement.classList.contains("store-item-icon")){

      const SeletedImg = target.parentElement.previousElementSibling.getAttribute('src');
      const pos = SeletedImg.indexOf('/');
      const imgSrc = SeletedImg.slice(pos);

      const SeletedItemName = target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
      const SeletedItemPrice = target.parentElement.parentElement.nextElementSibling.children[0].children[1].children[0].textContent;
      
      const cartTemplate = `
      <div class="cart-item d-flex justify-content-between text-capitalize my-3">
      <img src="img-cart${imgSrc}" class="img-fluid rounded-circle" id="item-img" alt="">
      <div class="cart-item-text">
      
      <p id="cart-item-title" class="font-weight-bold mb-0">${SeletedItemName}</p>
      <span>$</span>
      <span id="cart-item-price" class="cart-item-price" class="mb-0">${SeletedItemPrice}</span>
      </div>
      <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class="fas fa-trash"></i>
      </a>
      </div>
      `;
      
      $totalContainer.insertAdjacentHTML('beforebegin', cartTemplate);
    }

    ShowTotal();
}

const ShowTotal = () => {
  const $cartItemPrices = document.querySelectorAll(".cart-item-price");

  const itemPriceList = [];
  $cartItemPrices.forEach((cartITemPrice) => {
    itemPriceList.push(parseFloat(cartITemPrice.textContent)); // 실수로 변환 후 배열에 저장
  })

  const totalPrice = itemPriceList.reduce((total, item) => {
    total += item;
    return total;
  },0); // total의 초기 값을 0으로 초기화

  const totalItemPrice = totalPrice.toFixed(2);

  $totalPrice.textContent = totalItemPrice;
  $itemTotal.textContent = totalItemPrice;
  $itemCount.textContent = itemPriceList.length;
}

init();