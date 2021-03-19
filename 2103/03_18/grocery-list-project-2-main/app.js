const $form = document.querySelector("form");
const $itemInput = document.querySelector(".addItems-input");
const $groceryItemList = document.querySelector(".grocery-list");

let itemValueList = [];

function init() {
    $form.addEventListener("submit", addListItem);
}

const addListItem = (e) => {
    e.preventDefault();

    const inputValue = $itemInput.value;
    if(inputValue === "") {
        return 0;
    }
    else {
        itemValueList.push(inputValue);
        showListItem(inputValue);
    }
}

const showListItem = (inputValue) => {
    $groceryItemList.innerHTML += `
        <div class="grocery-item">
            <h4 class="grocery-item__title">${inputValue}</h4>
            <a href="#" class="grocery-item__link">
                <i class="far fa-trash-alt"></i>
            </a> 
        </div>
    `;
}

init();