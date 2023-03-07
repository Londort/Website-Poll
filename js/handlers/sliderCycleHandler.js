import { summComponent } from "../components/summComponent.js";
import { responseHandler } from "./responseHandler.js";

function sliderCycleHandler() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const slideWidth = slides[0].offsetWidth;
    const carouselTrack = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".nextBtn");

    nextBtn.addEventListener("click", () => {
        responseHandler();

        currentSlide++;

        if (currentSlide <= slides.length - 1) {
            slides.forEach(slide => {
                slide.classList.remove("active");
            });
            slides[currentSlide].classList.add("active");
        }
        

        if (currentSlide > slides.length - 1) {
            document.querySelector('.wrapper').innerHTML = summComponent();
        }
        carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    });
}
export { sliderCycleHandler };