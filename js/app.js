"use strict";

let currentNum = "";
let previousNum = "";
let operator = "";

let display = document.querySelector(".display");

const btnNumber = document.querySelectorAll(".number");

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", () => {
  currentNum = "";
  previousNum = "";
  operator = "";
  display.textContent = "";
});

const btnEqual = document.querySelector(".equal");
btnEqual.addEventListener("click", operate);

const btnOperator = document.querySelectorAll(".operator");

btnNumber.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNum.length <= 11) {
    currentNum += number;
    display.textContent = currentNum;
  }
}

btnOperator.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  })
);

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  currentNum = "";
  display.textContent = op + currentNum;
}

function operate() {
  let result = 0;
  currentNum = +currentNum;
  previousNum = +previousNum;
  if (operator === "+") {
    result = previousNum + currentNum;
  } else if (operator === "-") {
    result = previousNum - currentNum;
  } else if (operator === "*") {
    result = previousNum * currentNum;
  } else if (operator === "/" && currentNum !== 0) {
    result = previousNum / currentNum;
  } else {
    return (display.textContent = "Error");
  }
  return (display.textContent = result.toFixed(2));
}
