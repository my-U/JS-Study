(function() {
    const img = document.querySelector("#customer-img")
    const name = document.querySelector("#customer-name")
    const text = document.querySelector("#customer-text")
    const buttons = document.querySelectorAll(".btn")
    const list = []
    let index = 0

    function Customer(imgUrl, name, text) {
        this.imgUrl = imgUrl
        this.name = name
        this.text = text
    }

   function createCustomer(num, name, text) {
        let imgUrl = `img/customer-${num}.jpg`
        let customer = new Customer(imgUrl, name, text) // createCustomer메소드를 통해 받아오는 정보를 customer에 저장하기 위해 객체사용(?)

        list.push(customer)
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if(button.classList.contains('prevBtn')) {
                index--
                if(index < 0) {
                    index = list.length - 1
                }
                img.src = list[index].imgUrl
                name.textContent = list[index].name
                text.textContent = list[index].text
            }
            else if(button.classList.contains('nextBtn')) {
                index++
                if(index == list.length) {
                    index = 0
                }
                img.src = list[index].imgUrl
                name.textContent = list[index].name
                text.textContent = list[index].text
            }
        })
    })
})();