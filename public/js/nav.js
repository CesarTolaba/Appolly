window.addEventListener('load', () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    let line = document.querySelectorAll('.line');

    menu.addEventListener('click', () => {
        line[0].classList.toggle('line-t');
        line[1].classList.toggle('line-c');
        line[2].classList.toggle('line-b');
        nav.classList.toggle('nav-open');
    });

    window.addEventListener('scroll', () => {
        line[0].classList.remove('line-t');
        line[1].classList.remove('line-c');
        line[2].classList.remove('line-b');
        nav.classList.remove('nav-open');

    });
    
    
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
    },
    
  },
});



