import { slideContent } from "./slideContent.js";

function slideComponent() {
  const slides = slideContent.map((slide, index) => `
    <div class="carousel-item${index === 0 ? " active" : ""}">
      <h2 class="slide-title">${slide.question}</h2>
      <div class="form-group">
        ${slide.answers.map(answer => `
          <div class="form-check">
            <input class="form-check-input" type="${slide.type}" name="question-${index}" id="question-${index}-${answer}" value="${answer}">
            <label class="form-check-label" for="question-${index}-${answer}">
              ${answer}
            </label>
          </div>
        `).join("")}
      </div>
    </div>
  `);

  return slides.join("");
}

export {slideComponent};