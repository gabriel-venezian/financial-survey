/* Reset form on reload */
window.onload = () => {
  step_4_form.reset();
}

/* Add answers to local storage */
step_4_form.addEventListener("submit", () => {
  let surveyAnswers = JSON.parse(localStorage.getItem("survey-answers"));

  surveyAnswers.step4 = {
    skipped: false,
    questions: {
      question1: "Full name",
      question2: "Email",
      question3: "Age"
    },
    answers: {
      answer1: full_name.value,
      answer2: email.value,
      answer3: age.value
    }
  }

  localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
});
