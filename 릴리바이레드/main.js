let closeBtn = document.querySelector('.close-btn')
let navPC = document.querySelector('nav.pc')
let navMobile = document.querySelector('nav.mobile')
let LineBanner = document.querySelector('.line-banner')
let mainVisual = document.querySelector('.main-visual')
let video = document.querySelector('Section.main-visual video')
let mainVisual_h = document.querySelector('section.main-visual').offsetHeight

//카톡플친배너 닫기
closeBtn.addEventListener('click', function() {
    LineBanner.style.display = 'none'
    navPC.style.top = '0'
    navMobile.style.top = '0'
    navPC.classList.add('no-move')
    navMobile.classList.add('no-move')
    video.classList.add('video-move')
});

// 스크롤 이벤트 처리
window.addEventListener('scroll', function() {
    if (LineBanner.style.display !== 'none') {
        if (window.scrollY > 33) {
            navPC.classList.add('move')
            navMobile.classList.add('move')
        } else {
            navPC.classList.remove('move')
            navMobile.classList.remove('move')
        }
    }
    if ( window.scrollY > mainVisual_h ) {
        navPC.classList.add('filled')
        navMobile.classList.add('filled')
    } else {
        navPC.classList.remove('filled')
        navMobile.classList.remove('filled')
    }

    if (window.scrollY > 20) {  // 200px 이상 스크롤하면 버튼을 표시
        gotopButton.classList.add('show');
    } else {
        gotopButton.classList.remove('show');
    }
});

//드롭다운 메뉴 구현
let shopMenu = document.querySelector('.shop-menu')
let dropShop = document.querySelector('.drop-shop')
let communityMenu = document.querySelector('.community-menu')
let dropCommunity = document.querySelector('.drop-community')
let eventDrop = document.querySelector('.eventdrop')
let XmasDrop = document.querySelector('.Xmas-drop')

shopMenu.addEventListener('mouseenter', function(){
    dropShop.classList.add('drop-open')
})
shopMenu.addEventListener('mouseleave', function(){
    dropShop.classList.remove('drop-open')
})

communityMenu.addEventListener('mouseenter', function(){
    dropCommunity.classList.add('drop-open')
})
communityMenu.addEventListener('mouseleave', function(){
    dropCommunity.classList.remove('drop-open')
})

eventDrop.addEventListener('mouseenter', function(){
    XmasDrop.classList.add('Xmas-open')
})
eventDrop.addEventListener('mouseleave', function(){
    XmasDrop.classList.remove('Xmas-open')
})

//best-items 슬라이드 구현
const bestSlider = new Swiper('.best-slider', {
    slidesPerView:4,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: ".best-navigation button.next",
        prevEl: ".best-navigation button.prev",
    },
    autoplay: {
        delay: 1000
    }
});

//footer 드롭다운운
let Familydrop = document.querySelector('ul.family-site')
let select = document.querySelector('.select')

Familydrop.addEventListener('mouseenter',function(ev){
    Familydrop.classList.add('visible')
  })
Familydrop.addEventListener('mouseleave',function(ev){
    Familydrop.classList.remove('visible')
  })


//go-top button 
let gotopButton = document.querySelector('button.go-top')

gotopButton.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // 부드럽게 스크롤되도록 설정
    });
})