const burgerLines = document.querySelectorAll('.header_burger_content')
const burgerLink = document.querySelector('.header_burger')
const burgerMenu = document.querySelector('.burger_menu')
const backDrop = document.querySelector('.backdrop')
const mainView = document.querySelector('body')

const toggleMenu = () => {
    const clientWidth = document.body.clientWidth
    if (clientWidth <= 893) {
        burgerLines.forEach(item => {
            item.classList.toggle('close_icon')
        burgerMenu.classList.toggle('burger_menu_show')
        backDrop.classList.toggle('backdrop_show')
        mainView.classList.toggle('body_lock')
        })
    }
}
burgerLink.addEventListener('click', toggleMenu)
burgerMenu.addEventListener('click', () => toggleMenu())
backDrop.addEventListener('click', toggleMenu)



function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}


const playButton =  document.querySelector('.video_content_img_play')
const playBg =  document.querySelector('.video_content_img')
const playVideo =  document.querySelector('.video_content_video')

const showVideo = () => {
    // playBg.style.display = 'none'
    playBg.style.opacity = '0'
    playBg.style.pointerEvents = 'none'
    playButton.style.display = 'none'
    playVideo.style.display = 'block'
}

playButton.addEventListener('click', showVideo)




new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    grabCursor: true,
    slidesPerView: 1,
    slideToClickedSlide: true,
    keyboard: {
        enable: true,
        onlyInViewport: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: 'slide'

})

new WOW().init();