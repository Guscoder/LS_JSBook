function getNumber(num) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(num);
  return parseFloat(name);
}

function multiply(num1, num2) {
  return num1 * num2;
}

let firstNumber = getNumber('What is your first number?');
let secondNumber = getNumber('What is your second number?');

console.log(
  `${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`
);
