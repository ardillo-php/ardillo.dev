var shots = ['ardillo-clock-combo.png', 'ardillo-csvedit-combo.gif', 'ardillo-dns-combo.gif', 'ardillo-histogram-combo.gif', 'ardillo-starfield-combo.png', 'ardillo-tablegallery-combo.gif'];
var shotsPath = '/images/shots';

var slideIndex = 0;
var slideTimer;

function initCarousel() {
    var slide = document.querySelector('.carousel-slide');
    var dots = document.querySelector('.carousel-dots');

    for (var i = 0; i < shots.length; i++) {
        var img = document.createElement('img');
        img.src = shotsPath + '/' + shots[i];
        img.alt = shots[i];
        slide.appendChild(img);

        var dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.dataset.index = i;
        dot.addEventListener('click', function () {
            slideIndex = parseInt(this.dataset.index);
            showSlide();
        });
        dots.appendChild(dot);
    }

    showSlide();
    startSlideTimer();
}

function showSlide() {
    var slides = document.querySelectorAll('.carousel-slide img');
    var dots = document.querySelectorAll('.carousel-dot');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }

    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function startSlideTimer() {
    var slides = document.querySelectorAll('.carousel-slide img');

    slideTimer = setInterval(function () {
        if (slideIndex >= slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        showSlide();
    }, 6000);
}

function stopSlideTimer() {
    clearInterval(slideTimer);
}

function prevSlide() {
    if (slideIndex <= 0) {
        slideIndex = shots.length - 1;
    } else {
        slideIndex--;
    }

    showSlide();
    stopSlideTimer();
    startSlideTimer();
}

function nextSlide() {
    if (slideIndex >= shots.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    showSlide();
    stopSlideTimer();
    startSlideTimer();
}

document.addEventListener('DOMContentLoaded', function () {
    initCarousel();

    var arrowLeft = document.querySelector('.carousel-arrow-left');
    var arrowRight = document.querySelector('.carousel-arrow-right');

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
});
