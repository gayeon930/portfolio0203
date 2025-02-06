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


let currentPage = 1;
const totalPages = 3;

const prevBtn = document.querySelector('.slide-navigation .prev');
const nextBtn = document.querySelector('.slide-navigation .next');

function updateButtons() {
    if (currentPage === 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    // 마지막 페이지일 때 다음 버튼 비활성화
    if (currentPage === totalPages) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

function movePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }

    updateButtons(); 
}

// 버튼 클릭 시 페이지 이동
prevBtn.addEventListener('click', () => movePage('prev'));
nextBtn.addEventListener('click', () => movePage('next'));

// 초기 상태 업데이트
updateButtons();

