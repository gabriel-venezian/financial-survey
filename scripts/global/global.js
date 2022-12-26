/* Get Text Width */
function getTextWidth(text, font) {
  let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  let context = canvas.getContext("2d");
  context.font = font;
  let metrics = context.measureText(text);
  return metrics.width;
}

/* Resize Select */
window.addEventListener("resize", () => {
  let selectInput = document.querySelector("select");

  if (selectInput)
    resizeSelect(selectInput);
})

document.querySelectorAll("select").forEach(resizeSelect);

document.body.addEventListener("change", (e) => {
  if (e.target.matches("select")) {
    resizeSelect(e.target)
  } else if (e.target.type == "checkbox") {
    let checkboxList = Array.from(document.querySelectorAll("input[type='checkbox']"));
    let checkboxChecked = checkboxList.find(checkbox => checkbox.checked == true);

    if (checkboxChecked) {
      checkboxList.forEach(checkbox => {
        checkbox.required = false;
      });
    } else {
      checkboxList.forEach(checkbox => {
        checkbox.required = true;
      });
    }
  }
});

function resizeSelect(sel) {
  let optTextContent = sel.selectedOptions[0].textContent;

  let selFontWeight = window.getComputedStyle(sel, null).getPropertyValue("font-weight");
  let selFontSize = window.getComputedStyle(sel, null).getPropertyValue("font-size");
  let selFontFamily = window.getComputedStyle(sel, null).getPropertyValue("font-family").split(",")[0];
  let selPaddingInlineStart = window.getComputedStyle(sel, null).getPropertyValue("padding-inline-start");
  let selPaddingInlineEnd = window.getComputedStyle(sel, null).getPropertyValue("padding-inline-end");
  let selTotalPadding = parseInt(selPaddingInlineStart) + parseInt(selPaddingInlineEnd);

  let selWidth = getTextWidth(optTextContent, `${selFontWeight} ${selFontSize} ${selFontFamily}`) + selTotalPadding;

  let pageContainer = document.querySelector("[class*='container']");
  let pageContainerWidth = parseInt(window.getComputedStyle(pageContainer, null).getPropertyValue("width"));

  if (pageContainerWidth > selWidth) {
    sel.style.width = `${selWidth}px`;
  } else {
    sel.style.width = "100%";
  }
}

/* Skip Step */
function skipStep(currentUrl) {
  let currentStep = `step${parseInt(currentUrl.split("step-")[1])}`;
  let surveyAnswers = JSON.parse(localStorage.getItem("survey-answers"));

  if (surveyAnswers != null) {
    surveyAnswers[currentStep] = {
      skipped: true,
      questions: {},
      answers: {}
    }

    localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
  } else {
    surveyAnswers = {
      [currentStep]: {
        skipped: true,
        questions: {},
        answers: {}
      }
    }

    localStorage.setItem("survey-answers", JSON.stringify(surveyAnswers));
  }
}

/* Text Area Counter */
function textAreaCounter(inputText) {
  let length = inputText.value.length;

  if (length > 0) {
    charactersCounter.innerText = `${length}/130 characters`;
  } else {
    charactersCounter.innerText = `0/130 characters`;
  }
};
