const buttons = document.getElementsByClassName("calculator__button");
const operationField = document.getElementById("operation");
const resultField = document.getElementById("result");

let operations = [];
let input = "";
let result = 0;
let partialResult = 0;

console.log("script Loaded");

const handleButton = (event) => {
  const pressedButton = event.target.value;
  if (pressedButton == "") return;

  if (isNaN(pressedButton) && pressedButton !== ".") {
    const num = Number.parseFloat(input);
    const operator = pressedButton;
    input = "";

    if (isNaN(num)) {
      resultField.value = "Invalid operation";
      return;
    }
  }

  input += pressedButton;
  resultField.value = input;
};


/** Operaciones matematicas */
const addition = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

/** Eventos */
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButton);
}
