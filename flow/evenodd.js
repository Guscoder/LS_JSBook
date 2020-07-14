function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('error, you did not enter an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
