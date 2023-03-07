export function responseHandler() {

    const activeSlide = document.querySelector(".active");
    const answers = document.querySelectorAll(".form-check-input");

    let responses = [];
    let responsesObj = {};
    const question = activeSlide.querySelector(".slide-title").textContent;

    if (activeSlide) {
        
        responsesObj.question = question;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                responsesObj.answer = answers[i].value;
            }
        }
        responses.push(responsesObj);
    }

    console.log(responses);
}