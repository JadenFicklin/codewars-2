//You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

//Find max(abs(length(x) − length(y)))

//If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function mxdiflg(a1, a2) {
  //get largest string of a1
  const numbers = [];
  for (let i = 0; i < a1.length; i++) {
    numbers.push(a1[i].length);
  }
  const maxNumber = Math.max(...numbers);
  const minNumber = Math.min(...numbers);
  const largestString = []; //largest string of a1
  for (let j = 0; j < a1.length; j++) {
    if (a1[j].length === maxNumber) {
      largestString.push(a1[j]);
    }
  }
  //get smallest string of a1
  const smallestStringA1 = []; //smallest string of a1
  for (let ja = 0; ja < a1.length; ja++) {
    if (a1[ja].length === minNumber) {
      smallestStringA1.push(a1[ja]);
    }
  }

  //get largest string of a2
  const numbers2A2 = [];
  for (let aa = 0; aa < a2.length; aa++) {
    numbers2A2.push(a2[aa].length);
  }
  const largestNumberA2 = Math.max(...numbers2A2);
  const largestStringA2 = []; //largest string of a2
  for (let ab = 0; ab < a2.length; ab++) {
    if (a2[ab].length === largestNumberA2) {
      largestStringA2.push(a2[ab]);
    }
  }
  //get smallest string a2
  const numbers2 = [];
  for (let a = 0; a < a2.length; a++) {
    numbers2.push(a2[a].length);
  }
  const smallestNumber = Math.min(...numbers2);
  const smallestString = []; //smallest string of a2
  for (let b = 0; b < a2.length; b++) {
    if (a2[b].length === smallestNumber) {
      smallestString.push(a2[b]);
    }
  }

  const a1Max = maxNumber;
  const a1Min = minNumber;
  const a2Max = largestNumberA2;
  const a2Min = smallestNumber;

  const firstSubtract = a1Max - a2Min;
  //   console.log(a1Max);
  //   console.log(a2Min);

  const secondSubtract = a2Max - a1Min;
  //   console.log(a2Max);
  //   console.log(a1Min);

  if (a1.length === 0 || a2.length === 0) {
    return -1;
  } else if (firstSubtract > secondSubtract) {
    return firstSubtract;
  } else {
    return secondSubtract;
  }
}

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
