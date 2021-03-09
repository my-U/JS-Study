const $form = document.querySelector("#input-form");
const $itemInput = document.querySelector("#input-value");
const $feedback = document.querySelector(".feedback");
const $itemList = document.querySelector(".list-items");
const $clearBtn = document.querySelector(".clearBtn");

function init() {
    $form.addEventListener("submit", addListItem);
    $itemList.addEventListener("click", deleteItem);
    $clearBtn.addEventListener("click", allItemClear);
}

let itemValueList = [];

const addListItem = (e) => {
    e.preventDefault();
    const itemValue = $itemInput.value;
    
    if(itemValue === '') {
        const addClass = "alert-danger";
        const text = "<p>Can not add empty value!</p>"
        showFeedback(addClass, text);
    }
    else {
        itemValueList.push(itemValue);
        showList(itemValue);
        $itemInput.value = "";
        showFeedback("alert-success", "Item added to the list!");
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

const showFeedback = (newClass, text) => {
        $feedback.classList.add(`${newClass}`, "showItem");
        $feedback.innerHTML = `${text}`;

        setTimeout(() => {
            $feedback.classList.remove("showItem");
        }, 3000);
}

const deleteItem = ({target}) => {
    if(target.parentElement.classList.contains("remove-icon")){
        const deletedItem = target.closest("div");
        $itemList.removeChild(deletedItem);

        // const itemName = target.parentElement.previousElementSibling.textContent;
        itemValueList = itemValueList.filter((item) => { // 여기서 item은 itemValueList에 저장되어있는 데이터들
            return item !== target.parentElement.previousElementSibling.textContent; // itemName과 일치하지 않는 item들을 걸러 itemValueList에 저장
        });
        
        showList();
    }
}

const allItemClear = () => {
    $itemList.innerHTML = "";
}

init();

