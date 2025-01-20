class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.operation = '';
  }

  setValues(num1, num2, operation) {
    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      return 'Error: Division by zero';
    }
    return this.num1 / this.num2;
  }

  compute() {
    switch (this.operation) {
      case 'add':
        return this.add();
      case 'subtract':
        return this.subtract();
      case 'multiply':
        return this.multiply();
      case 'divide':
        return this.divide();
      default:
        return 'Invalid operation';
    }
  }
}

document.getElementById('calculateBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  const calculator = new Calculator();
  calculator.setValues(num1, num2, operation);
  const result = calculator.compute();

  document.getElementById('result').textContent = result;
});
