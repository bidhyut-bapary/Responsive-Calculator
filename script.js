// script.js
let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace('%', '/100');
    let result = eval(expression);
    if (isNaN(result) || !isFinite(result)) {
      display.value = 'Biswajit';
    } else {
      display.value = result;
    }
  } catch {
    display.value = 'Biswajit';
  }
}
