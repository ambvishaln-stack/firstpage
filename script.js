let slideIndex = 1;
let autoSlide;

// Start slider
showSlides(slideIndex);
startAutoSlide();

// Next / Previous buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
    restartAutoSlide();
}

// Dot click
function currentSlide(n) {
    showSlides(slideIndex = n);
    restartAutoSlide();
}

// Main function
function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slide every 4 seconds
function startAutoSlide() {
    autoSlide = setInterval(function () {
        plusSlides(1);
    }, 4000);
}

// Restart timer after manual click
function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Pause on hover
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", function () {
    clearInterval(autoSlide);
});

slider.addEventListener("mouseleave", function () {
    startAutoSlide();
});
