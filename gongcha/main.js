//헤더 드롭다운
let header = document.querySelector('header')
let nav = document.querySelector('nav.pc')
let drop = document.querySelector('.dropdown-menu')

nav.addEventListener('mouseenter', function(){
    header.style.height = nav.offsetHeight + drop.offsetHeight + 'px'
})
header.addEventListener('mouseleave', function(){
    header.style.height = '71px'
})

//드롭메뉴 호버 시 nav메뉴 글씨색 변환
document.querySelector('.drop-brand').addEventListener('mouseenter', function() {
    document.querySelector('.gnb1 .brand').style.color = '#C30F30'
})
document.querySelector('.drop-brand').addEventListener('mouseleave', function() {
    document.querySelector('.gnb1 .brand').style.color = '#666' 
})

document.querySelector('.drop-menu').addEventListener('mouseenter', function() {
    document.querySelector('.gnb1 .menu').style.color = '#C30F30'
})
document.querySelector('.drop-menu').addEventListener('mouseleave', function() {
    document.querySelector('.gnb1 .menu').style.color = '#666' 
})

document.querySelector('.drop-store').addEventListener('mouseenter', function() {
    document.querySelector('.gnb1 .store').style.color = '#C30F30'
})
document.querySelector('.drop-store').addEventListener('mouseleave', function() {
    document.querySelector('.gnb1 .store').style.color = '#666' 
})

document.querySelector('.drop-member').addEventListener('mouseenter', function() {
    document.querySelector('.gnb2 .member').style.color = '#C30F30'
})
document.querySelector('.drop-member').addEventListener('mouseleave', function() {
    document.querySelector('.gnb2 .member').style.color = '#666' 
})

document.querySelector('.drop-service').addEventListener('mouseenter', function() {
    document.querySelector('.gnb2 .service').style.color = '#C30F30'
})
document.querySelector('.drop-service').addEventListener('mouseleave', function() {
    document.querySelector('.gnb2 .service').style.color = '#666' 
})

document.querySelector('.drop-event').addEventListener('mouseenter', function() {
    document.querySelector('.gnb2 .event').style.color = '#C30F30'
})
document.querySelector('.drop-event').addEventListener('mouseleave', function() {
    document.querySelector('.gnb2 .event').style.color = '#666' 
})



//메인비주얼 슬라이더 구현
const mainSlider = new Swiper('.main-visual', {
    loop: true,
    navigation: {
        nextEl: ".visual-navigation button.next",
        prevEl: ".visual-navigation button.prev",
    },
    autoplay: {
        delay: 2000
    }
});



//베스트메뉴 슬라이더 구현
const bestSlider = new Swiper('.best-slider', {
    loop: true,
    slidesPerView:5,
    centeredSlides:true,
    speed: 600, 
    effect: 'slide',
    pagination: {
        el: ".best-pagination",
        type: "progressbar",
      },
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: ".best-navigation button.next",
        prevEl: ".best-navigation button.prev",
    },
});



//section.promotion 탭 구현
let promotionList = document.querySelectorAll('ul.promotion-list li')
let promotionItem = document.querySelectorAll('.promotion-item ul')

promotionList.forEach(function(list, index){
    list.addEventListener('click', function(event){
        event.preventDefault();
        promotionList.forEach(function(l){
            l.classList.remove('active')
        })
        list.classList.add('active')
        
        promotionItem.forEach(function(hall, i){
            if ( index === i ) {
                
                hall.classList.add('visible')
            }else {
                    
                hall.classList.remove('visible')
            }
        })
    })
})
//prev, next버튼 클릭시 탭이동 구현
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.promotion-navigation .prev')
    const nextButton = document.querySelector('.promotion-navigation .next')
    let activeIndex = 0

    // prev 버튼 클릭 시 동작
    prevButton.addEventListener('click', function() {
        activeIndex = (activeIndex - 1 +promotionList.length) % promotionList.length
        updateActiveItem()
    });

    // next 버튼 클릭 시 동작
    nextButton.addEventListener('click', function() {
        activeIndex = (activeIndex + 1) % promotionList.length
        updateActiveItem()
    });

    // active 클래스를 갱신하는 함수
    function updateActiveItem() {
        promotionList.forEach(item => item.classList.remove('active'))
        promotionList[activeIndex].classList.add('active')

        promotionItem.forEach(item => item.classList.remove('visible'))
        const activeItem = promotionItem[activeIndex]
        activeItem.classList.add('visible')
    }
    updateActiveItem()
})


//section.dessert 슬라이드 구현
const dessertSlider = new Swiper('.dessert-slider', {
    loop: true,
    spaceBetween: 35,
    slidesPerView:7,
    centeredSlides:true,
    speed: 600, 
    effect: 'slide',
    autoplay: {
        delay: 2000
    },
});
dessertSlider.update()


