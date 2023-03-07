"use strict"

import { slideComponent } from "./components/slideComponent.js";
import { sliderCycleHandler } from "./handlers/sliderCycleHandler.js";
import { responseHandler } from "./handlers/responseHandler.js";

// Insert slide content into carousel
const carouselTrack = document.querySelector(".carousel-track");
carouselTrack.innerHTML = slideComponent();

// Handling carousel
sliderCycleHandler();

// Handling responses
// let slide = document.querySelector(".carousel-item");
// slide.addEventListener("change", responseHandler);





