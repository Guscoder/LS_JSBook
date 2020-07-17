// 1. 4, 5, 0, 3, 101

// 2.

myArray.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j++) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value); // => 6, 4, 2, 4, 16, 0
    }
  }
}

// 4.

let newArray = myArray.map((num) => {
  if (num % 2 === 0) {
    num === 'even';
  } else {
    num === 'odd';
  }
});

// 5.
let newArray = myArray.filter((num) => {
  return Number.isInteger(num);
});

// 6.
function oddLengths(arr) {
  let newArray = myArray
    .map((item) => {
      return item.length;
    })
    .filter((number) => {
      return number % 2 === 1;
    });
  return newArray;
}

// 7.

numbers.reduce((acc, num) => {
  return acc + num * num;
}, 0);

// 8.
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function odderLengths(arr) {
  arr.reduce((acc, num) => {
    let length = num.length;
    if (length % 2 === 1) {
      acc.push(length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// 9.

numbers1.includes(3);

// 10.

let arr = [
  ['test', 'hello', 'world'],
  ['example', 6, 'mem', null],
  [4, 8, 12],
];

arr[1][2];
