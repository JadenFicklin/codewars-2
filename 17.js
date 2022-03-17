//return the max multiplication of a numbers adjacent index

function adjacentElementsProduct(param) {
  //finds max number
  const maxNumber = Math.max(...param);
  //holds before and after of max number
  let beforeAndAfter = [];

  for (let i = 0; i < param.length; i++) {
    if (param[i] === maxNumber) {
      const NumberAfter = param[i + 1];
      const NumberBefore = param[i - 1];
      beforeAndAfter.push(NumberAfter);
      beforeAndAfter.push(NumberBefore);
    }
  }

  //holds first multiplication
  const firstCalculation = maxNumber * beforeAndAfter[0];
  //holds first multiplication
  const secondCalculation = maxNumber * beforeAndAfter[1];
  const maxNumbers = [];
  maxNumbers.push(firstCalculation);
  maxNumbers.push(secondCalculation);
  const firstTimeMax = Math.max(...maxNumbers);

  //removes max number from array
  for (let j = 0; j < param.length; j++) {
    if (param[j] === maxNumber) {
      param.splice([j][0], 1);
    }
  }

  //////////////////////////////////////
  //finds max number
  const maxNumber1 = Math.max(...param);
  //holds before and after of max number
  let beforeAndAfter1 = [];

  for (let a = 0; a < param.length; a++) {
    if (param[a] === maxNumber1) {
      const NumberAfter1 = param[a + 1];
      const NumberBefore1 = param[a - 1];
      beforeAndAfter1.push(NumberAfter1);
      beforeAndAfter1.push(NumberBefore1);
    }
  }

  //holds first multiplication
  const firstCalculation1 = maxNumber1 * beforeAndAfter1[0];
  //holds first multiplication
  const secondCalculation1 = maxNumber1 * beforeAndAfter1[1];
  const maxNumbers1 = [];
  maxNumbers1.push(firstCalculation1);
  maxNumbers1.push(secondCalculation1);
  const firstTimeMax1 = Math.max(...maxNumbers1);

  //removes max number from array
  for (let b = 0; b < param.length; b++) {
    if (param[b] === maxNumber1) {
      param.splice([b][0], 1);
    }
  }
  /////////////////////////////////
  //finds max number
  const maxNumber2 = Math.max(...param);
  //holds before and after of max number
  let beforeAndAfter2 = [];

  for (let c = 0; c < param.length; c++) {
    if (param[c] === maxNumber2) {
      const NumberAfter2 = param[c + 1];
      const NumberBefore2 = param[c - 1];
      beforeAndAfter2.push(NumberAfter2);
      beforeAndAfter2.push(NumberBefore2);
    }
  }

  //holds first multiplication
  const firstCalculation2 = maxNumber2 * beforeAndAfter1[0];
  //holds first multiplication
  const secondCalculation2 = maxNumber2 * beforeAndAfter1[1];
  const maxNumbers2 = [];
  maxNumbers2.push(firstCalculation2);
  maxNumbers2.push(secondCalculation2);
  const firstTimeMax2 = Math.max(...maxNumbers2);

  //removes max number from array
  for (let d = 0; d < param.length; d++) {
    if (param[d] === maxNumber2) {
      param.splice([d][0], 1);
    }
  }

  const maxnumbersAll = [firstTimeMax, firstTimeMax1, firstTimeMax2];
  const heighest = Math.max(...maxnumbersAll);
  return heighest;
}

console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
//should return 50
