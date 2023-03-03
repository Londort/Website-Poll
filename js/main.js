"use strict"

import { slideComponent } from "./components/slideComponent.js";
import { sliderCycleHandler } from "./handlers/sliderCycleHandler.js";

// Insert slide content into carousel
const carouselTrack = document.querySelector(".carousel-track");
carouselTrack.innerHTML = slideComponent();

// Handling carousel
sliderCycleHandler();

// Handling responses






