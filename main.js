const Slider = new Swiper('.swiper', {
    loop: false,
    slidesPerView:2,
    spaceBetween:  window.innerWidth * 0.057,
    effect: 'slide',
    navigation: {
        nextEl: ".slide-navigation button.next",
        prevEl: ".slide-navigation button.prev",
    },
});
window.addEventListener('resize', function() {
    Slider.params.spaceBetween = window.innerWidth * 0.057;  // 100vw로 동적으로 변경
    Slider.update();  // Swiper 인스턴스 업데이트
});


