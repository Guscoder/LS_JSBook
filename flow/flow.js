// 1. flase, true, 3, 3, false, true, false,false, false,  true, false, true
// 4. It logs Product 2, Product 3, and Not found to the console because there are no break statements due to the fall-through behavior.

// 5.
if (foo()) {
  return 'bar';
} else {
  return qux();
}

// 6. Not Empty

// 7.
function capitalize(str) {
  return str.length() > 10 ? str.toUpperCase() : str;
}

// 8.
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
