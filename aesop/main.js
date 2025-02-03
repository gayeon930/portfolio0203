// 메인비주얼 영상제어 
let video = document.querySelector('video')
let state = document.querySelector('button.state')
let speaker = document.querySelector('button.speaker')

state.addEventListener('click', function(){
    if ( video.paused ) {  // 멈춰있을때
        video.play()
        state.classList.remove('pause')
    } else {
        video.pause()
        state.classList.add('pause')
    }
})
speaker.addEventListener('click', function(){
    if ( video.muted ) { // 음소거 상태면
        video.muted = false
        speaker.classList.add('sound')
    } else {
        video.muted = true
        speaker.classList.remove('sound')
    }
})



const newSlider = new Swiper('.new-slider', {
    slidesPerView:2,
    spaceBetween: 39,
    pagination: {
        el: ".new-pagination",
        type: "progressbar",
      },
    navigation: {
        nextEl: ".new-navigation button.next",
        prevEl: ".new-navigation button.prev",
    },
    breakpoints: {
        781: {
            slidesPerView: 3,
        },
    },
});


const lovedSlider = new Swiper('.loved-slider', {
    slidesPerView:2,
    spaceBetween: 39,
    pagination: {
        el: ".loved-pagination",
        type: "progressbar",
      },
    navigation: {
        nextEl: ".loved-navigation button.next",
        prevEl: ".loved-navigation button.prev",
    },
    breakpoints: {
        781: {
            slidesPerView: 3,
        },
        1201: {
            slidesPerView: 4,
        },
    },
});


const homeSlider = new Swiper('.home-slider', {
    slidesPerView:2,
    spaceBetween: 39,
    pagination: {
        el: ".home-pagination",
        type: "progressbar",
      },
    navigation: {
        nextEl: ".home-navigation button.next",
        prevEl: ".home-navigation button.prev",
    },
    breakpoints: {
        781: {
            slidesPerView: 3,
        },
        1201: {
            slidesPerView: 4,
        },
    },
});


const handleSlider = new Swiper('.handle-slider', {
    slidesPerView:3,
    spaceBetween: 25,
    initialSlide: 0, 
    
});
