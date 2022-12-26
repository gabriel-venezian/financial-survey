/* Reset form on reload */
window.onload = () => {
  step_3_form.reset();
}

/* Add answers to local storage */
step_3_form.addEventListener("submit", () => {
  let surveyAnswers = JSON.parse(localStorage.getItem("survey-answers"));

  surveyAnswers.step3 = {
    skipped: false,
    questions: {
      question1: "If you or someone close to you has already made a loss on the investment, write down the details",
    },
    answers: {
      answer1: loss_details.value,
    }
  }

  localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
});
