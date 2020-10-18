/*(function() {
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
                    content.style.backgroundImage = `url(${imgUrl})`
                }

                close.addEventListener('click', (e) => {
                    modal.style.display = 'none'
                }) // 닫기 버튼



                btn.forEach(function(control) {
                    control.addEventListener('click', (e) => {
                        if(control.classList.contains('btnLeft')) {

                        }
                        else if(control.classList.contains('btnRight')) {

                        }
                    })
                })

                // 아는 선에서 한계..ㅠㅠ
            })
        })
    })
})()*/

(function() {
    let storeItems = document.querySelectorAll('.store-item')
    let storeImg = document.querySelectorAll('.store-img')
    let lightBox = document.querySelector('.lightbox-container')
    let lightBoxItem = document.querySelector('.lightbox-item')

    let imageList = [];
    let imageCounter = 0;

    storeImg.forEach(function(image) { // 담겨있는 모든 요소들이 순서대로 한번씩 함수를 호출함
        imageList.push(image.src) // 각 이미지를 리스트에 삽입
    }) // 화면에 나와있는 순서대로 삽입


    storeItems.forEach(function(item) {
        item.addEventListener('click', (e) => {
            let image = e.target.src // store-item 내에 있는 src 자동 타겟 지정(?)
            lightBoxItem.style.backgroundImage = `url(${image})`
            lightBox.classList.add('show') // lightBox의 클래스에 show 추가, 클래스가 show인 css가 작성되어 있음
            imageCounter = imageList.indexOf(image) // indexOf : 배열에서 지정된 항목을 검색하고 해당 위치를 반환
        }) // imageCounter에는 해당하는 이미지의 주소의 인덱스값이 들어있음
    })


    let btnLeft = document.querySelector('.btnLeft')
    btnLeft.addEventListener('click', (e) => {
        imageCounter--
        if(imageCounter < 0) {
            imageCounter = imageList.length - 1
        }
        lightBoxItem.style.backgroundImage  = `url(${imageList[imageCounter]})`
    })

    let btnRight = document.querySelector('.btnRight')
    btnRight.addEventListener('click', (e) => {
        imageCounter++
        if(imageCounter === imageList.length) {
            imageCounter = 0
        }
        lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
    })

    let lightBoxClose = document.querySelector('.lightbox-close')
    lightBoxClose.addEventListener('click', (e) => {
        lightBox.classList.remove('show')
    })
})()