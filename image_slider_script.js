let currentImageSlide = 0;
const imageSlides = document.querySelectorAll('.image-slide');

document.querySelector('.slider-next').addEventListener('click', () => {
    imageSlides[currentImageSlide].style.display = "none";  // Hide the current slide
    currentImageSlide = (currentImageSlide + 1) % imageSlides.length;  // Move to the next slide
    imageSlides[currentImageSlide].style.display = "block";  // Show the new slide
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    imageSlides[currentImageSlide].style.display = "none";  // Hide the current slide
    currentImageSlide = (currentImageSlide - 1 + imageSlides.length) % imageSlides.length;  // Move to the previous slide
    imageSlides[currentImageSlide].style.display = "block";  // Show the new slide
});

setInterval(() => {
    imageSlides[currentImageSlide].style.display = "none";  // Hide the current slide
    currentImageSlide = (currentImageSlide + 1) % imageSlides.length;  // Move to the next slide
    imageSlides[currentImageSlide].style.display = "block";  // Show the new slide
}, 3000);  // Auto-slide every 3 seconds