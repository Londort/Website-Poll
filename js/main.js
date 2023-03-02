import { slideContent } from './slideContent.js';
import { slideComponent } from './slideComponent.js';

const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slides = document.querySelectorAll('.carousel-item');

let slideIndex = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[n].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

slideContent.forEach((slide) => {
  carouselTrack.innerHTML += slideComponent(slide);
});

slides[slideIndex].classList.add('active');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
