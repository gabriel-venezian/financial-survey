/* Add answers to local storage */
step_1_form.addEventListener("submit", () => {
  let surveyAnswers = {
    step1: {
      skipped: false,
      questions: {
        question1: "What is the status of your account?",
        question2: "In which financial markets do you operate?",
      },
      answers: {
        answer1: account_status.value,
        answer2: document.querySelector('input[name="financial-market"]:checked').value
      }
    }
  }

  localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
});
