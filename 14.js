// Count the number of divisors of a positive integer n.

const getDivisorsCnt = (param) => {
  const numbers = [];
  const wholeNumbers = [];
  for (let i = 0; i <= 500000; i++) {
    numbers.push(param / [i]);
  }
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 1 === 0) {
      wholeNumbers.push(numbers[j]);
    }
  }
  return wholeNumbers.length;
};

console.log(getDivisorsCnt(30));
