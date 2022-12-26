/* Reset form on reload */
window.onload = () => {
  step_2_form.reset();
}

/* Add answers to local storage */
step_2_form.addEventListener("submit", () => {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
  let selectedCheckboxes = Array.from(checkedCheckboxes).map(checkbox => checkbox.labels[0].innerText);

  let surveyAnswers = JSON.parse(localStorage.getItem("survey-answers"));

  surveyAnswers.step2 = {
    skipped: false,
    questions: {
      question1: "How do you decide to invest?",
      question2: "What resources have you used or are you using for your training?",
    },
    answers: {
      answer1: investment_decided.value,
      answer2: selectedCheckboxes
    }
  }

  localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
});
