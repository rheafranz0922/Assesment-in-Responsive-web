let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    const translateValue = -currentSlide * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

// Optionally, you can add automatic sliding
// setInterval(nextSlide, 3000);