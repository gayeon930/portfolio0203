let header = document.querySelector('header')
let viewService = document.querySelector('.drop.view-service')
let viewResorce = document.querySelector('.drop.view-resorce')
let $all = document.querySelector('ul.all-services')
let $resorce = document.querySelector('.resorce')
let headerInner = document.querySelector('.header-inner')
let drop = document.querySelector('.dropdown-menu')
let blog = document.querySelector('.blog')
let voucher = document.querySelector('.voucher')
let headerBg = document.querySelector('.header-bg')

// 스크롤 이벤트 처리
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('filled')
        header.style.background = '#fff' 
    } else {
        header.classList.remove('filled');
        header.style.background = 'transparent'
    }
})

// 드롭다운 관련 이벤트 처리
viewService.addEventListener('mouseenter', function () {
    $resorce.style.visibility = 'hidden'
    $all.style.visibility = 'visible'
    headerBg.style.display = 'block'
    header.style.height = headerInner.offsetHeight + drop.offsetHeight + 'px'

    if (window.scrollY > 100) {
        header.style.background = '#fff'
    } else {
        header.style.background = 'rgba(29, 29, 31, 1)'
    }
})

viewResorce.addEventListener('mouseenter', function () {
    $all.style.visibility = 'hidden'
    $resorce.style.visibility = 'visible'
    headerBg.style.display = 'block'
    header.style.height = headerInner.offsetHeight + drop.offsetHeight + 'px'

    if (window.scrollY > 100) {
        header.style.background = '#fff'
    } else {
        header.style.background = 'rgba(29, 29, 31, 1)';
    }
})

// 블로그, 가격 관련 마우스 이벤트 처리
blog.addEventListener('mouseenter', function () {
    header.style.height = '65px'
    headerBg.style.display = 'none'

    if (window.scrollY > 100) {
        header.style.background = '#fff'
    } else {
        header.style.background = 'rgba(29, 29, 31, 1)';
    }
})

voucher.addEventListener('mouseenter', function () {
    header.style.height = '65px'
    headerBg.style.display = 'none'

    if (window.scrollY > 100) {
        header.style.background = '#fff'
    } else {
        header.style.background = 'rgba(29, 29, 31, 1)';
    }
})

// 헤더에서 마우스가 나갔을 때
header.addEventListener('mouseleave', function () {
    header.style.height = '65px'
    headerBg.style.display = 'none'

    if (window.scrollY > 100) {
        header.style.background = '#fff'
    } else {
        header.style.background = 'transparent'
    }
})

// Selection.client-brand슬라이드 구현
const clientBrand = new Swiper('.client-brand', {
    loop: true,
    slidesPerView:'auto',
    centeredSlides:true,
    speed: 2000, 
    effect: 'slide',
    autoplay: {
        delay: 1
    }
})

// Selection.flex-ceo슬라이드 구현
const flexceo = new Swiper('.flex-ceo-inner', {
    slidesPerView:3,
    slidesPerGroup: 1,
    spaceBetween: 12.5,
    speed: 2000, 
    navigation: {
        nextEl: ".slide-navigation button.next",
        prevEl: ".slide-navigation button.prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 3, 
          slidesPerGroup: 3,
          navigation: {
            nextEl: ".slide-navigation button.next",
            prevEl: ".slide-navigation button.prev",
            },
        }
      }
})
const scrollPosition = window.scrollY;  // 스크롤 위치
const totalHeight = document.documentElement.scrollHeight;  // 전체 페이지 높이
console.log('현재 스크롤 위치:', scrollPosition);
console.log('전체 페이지 높이:', totalHeight);