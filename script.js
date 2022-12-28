let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger-menu');

let logoName = document.querySelector('.header__logo-name');
let logoDescr = document.querySelector('.header__logo-descr');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    logoName.classList.toggle('active');
    logoDescr.classList.toggle('active');
})

window.addEventListener('resize', function () {
    burger.classList.remove('active');
    menu.classList.remove('active');
    logoName.classList.remove('active');
    logoDescr.classList.remove('active');
})

// slider

const items = document.querySelectorAll('.pets__item');
const wrapper = document.querySelector('.pets__wrapper');
let count = 0;
let itemsInSlide = 3;
let width;

if (innerWidth >= 900) {
    itemsInSlide = 3;
}
if (innerWidth < 900) {
    itemsInSlide = 2;
}
if (innerWidth < 650) {
    itemsInSlide = 1;
}

function init() {
    width = document.querySelector('.pets__list').offsetWidth;
    wrapper.style.width = width * items.length + 'px';
    items.forEach(item => {
        item.style.width = width / itemsInSlide - 30 + 'px';
        item.style.height = 'auto';
    });
    slide();
}

init();
window.addEventListener('resize', () => {
    init();
    if (innerWidth >= 900) {
        itemsInSlide = 3;
    }
    if (innerWidth < 900) {
        itemsInSlide = 2;
    }
    if (innerWidth < 650) {
        itemsInSlide = 1;
    }
});

document.querySelector('.pets__button-right').addEventListener('click', () => {
    count++;
    if (count >= items.length / itemsInSlide) {
        count = 0;
    }
    slide();
});

document.querySelector('.pets__button-left').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = items.length - 1;
    }
    slide();
});

function slide() {
    wrapper.style.transform = 'translate(-' + count * width + 'px)'
}