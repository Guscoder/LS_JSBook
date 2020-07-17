let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');

age = parseInt(age);

console.log(`You are ${age} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

// 2.

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

function factorial(num) {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

// 3. Since counter is being assigned 1 in line 3, it never breaks out of teh loop since 1 is a truthy value and each time it will assign counter to one and log it out. It never reaches 2 so never breaks off the code.

// 4. There is no error, i is reassigned a new value in the log output and then the loop stops when i reaches 5.

// 5.
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  'It took ' + String(tries) + ' tries to get a number greater than 2'
);

// 6.

function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}
