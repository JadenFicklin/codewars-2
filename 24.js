// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(param) {
  const oddsArr = [];
  const cubedArr = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i] % 2 !== 0) {
      oddsArr.push(param[i]);
    }
  }
  for (let j = 0; j < oddsArr.length; j++) {
    const cubed = oddsArr[j] * oddsArr[j] * oddsArr[j];
    cubedArr.push(cubed);
  }

  const sum = cubedArr.reduce((partialSum, a) => partialSum + a, 0);
  const typeofArray = [];
  const typeofArrayFalse = [];

  for (let a = 0; a < param.length; a++) {
    if (typeof param[a] == "number") {
      typeofArray.push("true");
    } else {
      typeofArrayFalse.push("false");
    }
  }

  if (typeofArrayFalse.length >= 1) {
    return undefined;
  } else {
    return sum;
  }
}

console.log(cubeOdd([1, 2, 3, 4]));
