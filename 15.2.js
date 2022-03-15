function wordsToMarks(string) {
  const seperateString = string.split("");
  numbersArr = [];

  for (let i = 0; i < seperateString.length; i++) {
    if (seperateString[i] === "a") {
      numbersArr.push(1);
    }
    if (seperateString[i] === "b") {
      numbersArr.push(2);
    }
    if (seperateString[i] === "c") {
      numbersArr.push(3);
    }
    if (seperateString[i] === "d") {
      numbersArr.push(4);
    }
    if (seperateString[i] === "e") {
      numbersArr.push(5);
    }
    if (seperateString[i] === "f") {
      numbersArr.push(6);
    }
    if (seperateString[i] === "g") {
      numbersArr.push(7);
    }
    if (seperateString[i] === "h") {
      numbersArr.push(8);
    }
    if (seperateString[i] === "i") {
      numbersArr.push(9);
    }
    if (seperateString[i] === "j") {
      numbersArr.push(10);
    }
    if (seperateString[i] === "k") {
      numbersArr.push(11);
    }
    if (seperateString[i] === "l") {
      numbersArr.push(12);
    }
    if (seperateString[i] === "m") {
      numbersArr.push(13);
    }
    if (seperateString[i] === "n") {
      numbersArr.push(14);
    }
    if (seperateString[i] === "o") {
      numbersArr.push(15);
    }
    if (seperateString[i] === "p") {
      numbersArr.push(16);
    }
    if (seperateString[i] === "q") {
      numbersArr.push(17);
    }
    if (seperateString[i] === "r") {
      numbersArr.push(18);
    }
    if (seperateString[i] === "s") {
      numbersArr.push(19);
    }
    if (seperateString[i] === "t") {
      numbersArr.push(20);
    }
    if (seperateString[i] === "u") {
      numbersArr.push(21);
    }
    if (seperateString[i] === "v") {
      numbersArr.push(22);
    }
    if (seperateString[i] === "w") {
      numbersArr.push(23);
    }
    if (seperateString[i] === "x") {
      numbersArr.push(24);
    }
    if (seperateString[i] === "y") {
      numbersArr.push(25);
    }
    if (seperateString[i] === "z") {
      numbersArr.push(26);
    }
  }

  const sum = numbersArr.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}

console.log(wordsToMarks("abc"));
