(function() {
    const storeItem = document.querySelectorAll('.store-item')
    const storeImg = document.querySelectorAll('.store-img')
    
    storeItem.forEach(function(button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const item = e.target.dataset.item

            const modal = document.querySelector('.lightbox-container')
            const content = document.querySelector('.lightbox-item')
            const close = document.getElementsByClassName('lightbox-close')[0]
            const btn = document.querySelectorAll(".lightbox-control")

            storeImg.forEach(function(img) {
                const imgUrl = img.src

                if(img.classList.contains(item)) {
                    modal.style.display = 'block'
                    content.style.backgroundImage = `url('${imgUrl}')`
                }

                close.addEventListener('click', (e) => {
                    modal.style.display = 'none'
                }) // 닫기 버튼



                btn.forEach(function(control) {
                    control.addEventListener('click', (e) => {
                        if(control.classList.contains('btnLeft')) {

                        }
                        else(control.classList.contains('btnRight')) {

                        }
                    })
                })

                // 아는 선에서 한계..ㅠㅠ
            })
        })
    })
})();