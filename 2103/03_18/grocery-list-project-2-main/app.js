const $form = document.querySelector("form");
const $itemInput = document.querySelector(".addItems-input");
const $groceryItemList = document.querySelector(".grocery-list");
const $deleteBtns = document.querySelectorAll(".grocery-item__link");
const $allClearItem = document.querySelector(".displayItems-clear");
const $feedback = document.querySelector(".addItems-action");
const $dltFeedback = document.querySelector(".displayItems-action");

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
        showFeedback("alert", "Please Add Grocery Item!");
    }
    else {
        itemValueList.push(inputValue);
        showListItem(inputValue);
        $itemInput.value = "";
        showFeedback("success", `${inputValue} Added To The List`);
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
        
        itemValueList = itemValueList.filter((item) => {
            return item !== target.parentElement.previousSibling.previousSibling.textContent;
        });
        console.log(itemValueList);
        $dltFeedback.classList.add("success");
        $dltFeedback.innerHTML = `<p>${target.parentElement.previousSibling.previousSibling.textContent} Removed From List</p>`;
        setTimeout(() => {
            $dltFeedback.classList.remove("success");
        }, 3000);
    }
}

const allClear = ({target}) => {
    if(target.classList.contains("displayItems-clear")){
        $groceryItemList.innerHTML = `<button type="submit" class="displayItems-clear">clear items</button>`;
    }
}

const showFeedback = (state, text) => {
    $feedback.classList.add(state);
    $feedback.innerHTML = `<p>${text}</p>`;

    setTimeout(() => {
        $feedback.classList.remove("success", "alert");
    }, 3000);
}

init();