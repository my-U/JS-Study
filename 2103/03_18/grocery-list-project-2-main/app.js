const $form = document.querySelector("form");
const $itemInput = document.querySelector(".addItems-input");
const $groceryItemList = document.querySelector(".grocery-list");
const $deleteBtns = document.querySelectorAll(".grocery-item__link");
const $allClearItem = document.querySelector(".displayItems-clear");

let itemValueList = [];

function init() {
    $form.addEventListener("submit", addListItem);
    $groceryItemList.addEventListener("click", deleteItem);
    $groceryItemList.addEventListener("click", allClear);
    // $allClearItem.addEventListener("submit", allClear);
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
        $itemInput.value = "";
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

const deleteItem = ({target}) => {
    if(target.parentElement.classList.contains("grocery-item__link")) {
        const deleteBtn = target.closest("div");
        $groceryItemList.removeChild(deleteBtn);

        itemValueList.filter((item) => {
            return item !== target.parentElement.previousSibling.textContent;
        });
    }
}

const allClear = ({target}) => {
    if(target.classList.contains("displayItems-clear")){
        $groceryItemList.innerHTML = `<button type="submit" class="displayItems-clear">clear items</button>`;
    }
}

init();