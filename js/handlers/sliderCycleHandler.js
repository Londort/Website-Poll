import { summComponent } from "../components/summComponent.js";
import { localStorageResponseHandler } from "./responseHandler.js";

function sliderCycleHandler() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const slideWidth = slides[0].offsetWidth;
    const carouselTrack = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".nextBtn");
    const summary = document.querySelector(".summ-component");

    nextBtn.addEventListener("click", () => {
        slideIndex++;

        if (slideIndex > slides.length - 1) {
            document.querySelector('.wrapper').innerHTML = summComponent();
        }

        carouselTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
}
export { sliderCycleHandler };