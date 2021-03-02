const $form = document.querySelector("#input-form");
const $itemInput = document.querySelector("#input-value");
const $feedback = document.querySelector(".feedback");
const $itemList = document.querySelector(".list-items");
const $deleteBtns = document.querySelectorAll(".remove-icon");
const $clearBtn = document.querySelector(".clearBtn");

function init() {
    $form.addEventListener("submit", addListItem);
    $deleteBtns.forEach(function(deleteBtn) {
        deleteBtn.addEventListener("click", deleteItem);
    })
    $clearBtn.addEventListener("click", allItemClear);
}

const itemValueList = [];

const addListItem = (e) => {
    e.preventDefault();
    const itemValue = $itemInput.value;
    
    if(itemValue.length > 0){
        itemValueList.push(itemValue);
        showList(itemValue);
        $itemInput.value = "";
    }
}

const showList = (item) => {

    const listTemplate =  `
    <div class="item my-3 d-flex justify-content-between p-2">
       <h5 class="item-title text-capitalize">${item}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
    </div>
    `;

    $itemList.insertAdjacentHTML("beforeend", listTemplate);
}

const deleteItem = ({target}) => {
    if(target.parentElement.classList.contains("remove-icon")){
        alert("aa");
    }
}

const allItemClear = () => {
    $itemList.innerHTML = "";
}

init();

