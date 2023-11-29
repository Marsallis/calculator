let expression = "";

function addToDisplay(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = evaluateExpression(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

function evaluateExpression(expr) {
  const sanitizedExpression = expr.replace(/[^-()\d/*+.]/g, "");
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}

function deleteLastEntry() {
  expression = expression.slice(0, -1);
  document.getElementById("display").value = expression;
}

function squareRoot() {
  try {
    const result = Math.sqrt(evaluateExpression(expression));
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

function powerOfTwo() {
  try {
    const result = Math.pow(evaluateExpression(expression), 2);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

// Adding some extra functionalities to handle keyboard events
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/\d/.test(key)) {
    addToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    addToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLastEntry();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
