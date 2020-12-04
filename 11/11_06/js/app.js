(function() {
    const $form = document.querySelector('#itemForm');
    const $itemInput = document.querySelector('#itemInput');
    const $itemList = document.querySelector('.item-list');
    const $feedback = document.querySelector('.feedback');
    const $clear = document.querySelector('#clear-list');

    let todoItems = []; // 입력되는 itemInput.value를 배열형식으로 저장

    // 입력 버튼을 눌렀을 때
    $form.addEventListener('submit', (e) => {
        e.preventDefault();

        const itemName = $itemInput.value;

        if(itemName.length === 0){ // 빈값이 입력되었을 떄
            $feedback.innerHTML = "Please Enter Valid Value";
            $feedback.classList.add('showItem', 'alert-danger');
            setTimeout(function(){
                $feedback.classList.remove('showItem');
            }, 3000)
        }
        else { // 알맞게 입력되었을 때
            todoItems.push(itemName);
            getList(todoItems); // submmit이 될 때마다 직접 생성 할 필요없이 getList가 호출되어 todoList에 내용이 들어감 
        }
        
        itemName = '';
        
    });

    const getList = function(todoItems) { // 리스트의 내용을 가져옴

        todoItems.forEach(function(item) { // todoItems리스트에 들어있는 각 요소들이 수행됨
            $itemList.insertAdjacentHTML('beforeend', // itemList요소가 끝나기 전에 다음 요소를 삽입
            `
            <div class="item my-3">
            <h5 class="item-name text-capitalize">${item}</h5>
            <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
            </div>
            </div>
            `);

            handleItem(item);
        });
    }

    const handleItem = function(itemName) { // itemName은 todoItems리스트에 들어있는 item과 같음
        const items = $itemList.querySelectorAll('.item'); // submit되어 생성된 itemList의 item

        items.forEach(function(item) {
            
            if(item.querySelector('.item-name').textContent = itemName) { // 생성된 item의 내용과 todoItems의 itemName과 일치한다면
                // 완료 버튼을 누른 경우
                item.querySelector('.complete-item').addEventListener('click', function(){ 
                    item.querySelector('.item-name').classList.toogle('completed'); // classList에 coompleted가 없으면 추가하고 있다면 제거
                    this.classList.toggle('visibility'); // this는 .complete-item
                });
                
                // 수정 버튼을 누른 경우
                item.querySelector('.edit-item').addEventListener('click', function(){
                    $itemInput.value = itemName;
                    $itemList.removeChild(item); // itemList에서 해당 item을 지움

                });

                // 삭제 버튼을 누른 경우
                item.querySelector('.delete-item').addEventListener('click', function(){
                    $itemList.removeChild(item);

                });


            }
        });

    }



    // 리스트 전체 삭제 버튼
    $clear.addEventListener('click', function() {
        todoItems = [];
        getList(todoItems);
    })


})()