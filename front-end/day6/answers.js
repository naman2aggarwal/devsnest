//answers for assignment questions [refer questions.txt for questions]

//answer for question 1
let isArray = (val) => Array.isArray(val);

//answer for question 2
let cloneArray = (arr) => arr.slice(0);

//answer for question 3
let firstElements = (arr, n = 1) => arr.slice(0, n);

//answer for question 4
let joinArrElements = (arr, delimiter) => arr.join(delimiter);

//answer for question 5
let mostFreqElement = (arr) => {
  if (arr.length === 0) {
    return "Array is Empty!";
  }
  let elementCounter = {};
  for (let item of arr) {
    elementCounter[item] = elementCounter[item] ? elementCounter[item] + 1 : 1;
  }
  let maxElement,
    maxElementCount = 0;
  for (let item in elementCounter) {
    if (elementCounter[item] > maxElementCount) {
      maxElement = item;
      maxElementCount = elementCounter[item];
    }
  }
  return `${maxElement} ( ${maxElementCount} times)`;
};
