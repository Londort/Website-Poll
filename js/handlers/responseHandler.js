export function responseHandler () {
    
    const activeSlide = document.querySelector(".active");
    const answers = document.querySelectorAll(".form-check-input");

    let responses = [];
    
    if (activeSlide) {
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                responses.push(answers[i].value);
            }
        }
    }

    console.log(responses);
}