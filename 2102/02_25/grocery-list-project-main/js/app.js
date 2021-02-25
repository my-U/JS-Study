const $itemInput = document.querySelector("#input-value");
const $feedback = document.querySelector(".feedback");
const $itemList = document.querySelector(".list-items");

function init() {
    $itemInput.addEventListener("keypress", addListItem);
}

const itemValueList = [];

const addListItem = (e) => {
    const itemValue = $itemInput.value;

    if(e.key === "Enter") {
        e.preventDefault();

        // if(itemValue === null && itemValue === " ") {
        //     setTimeout(() => {
        //         $feedback.classList.toggle("showItem");
                
        //     }, 3);
        // }

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

init();

