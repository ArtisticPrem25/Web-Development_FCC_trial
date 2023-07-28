let displayOperation = "";
let displayAnswer = "0";

function updateDisplay() {
  $("#display-operation").text(displayOperation);
  $("#display-answer").text(displayAnswer);
}

function clearDisplay() {
  displayOperation = "";
  displayAnswer = "0";
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayAnswer === "0" || displayAnswer === "Error") {
    displayAnswer = value;
  } else {
    displayAnswer += value;
  }
  updateDisplay();
}

function backspace() {
  if (displayAnswer.length === 1) {
    displayAnswer = "0";
  } else {
    displayAnswer = displayAnswer.slice(0, -1);
  }
  updateDisplay();
}

function calculate() {
  try {
    displayAnswer = eval(displayAnswer).toString();
    displayOperation = "";
  } catch (error) {
    displayAnswer = "Error";
  }
  updateDisplay();
}

$(document).ready(function () {
  updateDisplay();
});
