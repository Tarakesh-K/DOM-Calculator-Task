var container = document.querySelector(".container");

var row = document.querySelector(".row");

var h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.innerHTML = "Calculator Task";

container.append(h1);

var p = document.createElement("p");
p.setAttribute("id","description");
p.innerHTML = "This is a basic calculator";

container.append(p);

row.innerHTML =
  `
<div class="calculator-grid col-7 col-md-6 col-lg-4">
<input id="result">
<div class="output onclick="myFunction()">
    <div data-previous-operand class="previous-operand" id="prev-op"></div>
    <div data-current-operand class="current-operand" id="cur-op"></div>
</div>
<div class="row row-1">
    <div data-all-clear class="col-3"><button class="clr" id="clear">C</button></div>
    <div data-delete class="col-3"><button class="left" id="leftarr">&larr;</button></div>
    <div data-number class="col-3"><button class="dot" id="dot">.</button></div>
    <div data-operation class="col-3"><button class="mul" id="mul">X</button></div>
</div>
<div class="row row-1">
    <div data-number class="col-3"><button class="seven" id="7">7</button></div>
    <div data-number class="col-3"><button class="eight" id="8">8</button></div>
    <div data-number class="col-3"><button class="nine" id="9">9</button></div>
    <div data-operation class="col-3"><button class="div" id="divide">/</button></div>
</div>
<div class="row row-1">
    <div data-number class="col-3"><button class="four" id="4">4</button></div>
    <div data-number class="col-3"><button class="five" id="5">5</button></div>
    <div data-number class="col-3"><button class="six" id="6">6</button></div>
    <div data-operation class="col-3"><button class="sub" id="subtract">-</button></div>
</div>
<div class="row row-1">
    <div data-number class="col-3"><button class="one" id="one">1</button></div>
    <div data-number class="col-3"><button class="two" id="two">2</button></div>
    <div data-number class="col-3"><button class="three" id="three">3</button></div>
    <div data-operation class="col-3"><button class="add" id="add">+</button></div>
</div>
<div class="row row-1 row-2">
    <div data-number class="col-3"><button class="zero" id="0">0</button></div>
    <div data-number class="col-3"><button class="zerozero" id="00">00</button></div>
    <div data-equals class="col-6"><button class="equal" id="equal">=</button></div>
</div>
</div>
`;

container.append(row);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.current.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ``;
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if(isNaN(prev) || isNaN(current)) return;
    switch(this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'X':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('')[1];
    let integerDisplay;
    if(isNaN(integerDigits)) {
      integerDisplay = '';
    }else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0 })
    }
    if(decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if(this.opertaion != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

operationsButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});