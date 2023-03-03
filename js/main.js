"use strict"

import { slideComponent } from "./components/slideComponent.js";
import { sliderCycleHandler } from "./handlers/sliderCycleHandler.js";
import { localStorageResponseHandler } from "./handlers/responseHandler.js";

// Insert slide content into carousel
const carouselTrack = document.querySelector(".carousel-track");
carouselTrack.innerHTML = slideComponent();

// Handling carousel
sliderCycleHandler();

// Handling localStorage
localStorageResponseHandler();

// Handle next button click to cycle through slides
// let slideIndex = 0;
// const slides = document.querySelectorAll(".carousel-item");
// const slideWidth = slides[0].offsetWidth;

// nextBtn.addEventListener("click", () => {
//     slideIndex++;
//     if (slideIndex > slides.length - 1) {
//         document.querySelector('.wrapper').innerHTML = summComponent();
//     }
//     carouselTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
// });

// V2 -----------------

// import { slideComponent } from "./slideComponent.js";

// const form = document.querySelector("form");
// const carouselTrack = document.querySelector(".carousel-track");
// const nextBtn = document.querySelector(".nextBtn");

// let currentPosition = 0;

// carouselTrack.innerHTML = slideComponent();

// function handleNext() {
//     const currentSlide = document.querySelectorAll(".carousel-item")[currentPosition];
//     const inputs = currentSlide.querySelectorAll("input");
//     const responses = Array.from(inputs).filter(input => input.checked).map(input => input.value);

//     localStorage.setItem(`question-${currentPosition}`, JSON.stringify(responses));

//     currentPosition++;
//     carouselTrack.style.transform = `translateX(-${currentPosition * 100}%)`;
//     nextBtn.disabled = true;

//     if (currentPosition === document.querySelectorAll(".carousel-item").length - 1) {
//         nextBtn.textContent = "Submit";
//     }
// }

// nextBtn.addEventListener("click", () => {
//     handleNext();

//     if (currentPosition === document.querySelectorAll(".carousel-item").length) {
//         form.submit();
//     }
// });

// form.addEventListener("submit", () => {
//     localStorage.clear();
// });






