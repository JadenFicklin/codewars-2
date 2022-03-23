//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//So given a string "super", we should return a list of [2, 4].

function vowelIndices(word) {
  const toLower = word.toLowerCase();
  const splitString = toLower.split("");
  let holdNumbers = [];

  for (let i = 0; i < splitString.length; i++) {
    if (
      splitString[i] == "a" ||
      splitString[i] == "e" ||
      splitString[i] == "i" ||
      splitString[i] == "o" ||
      splitString[i] == "u" ||
      splitString[i] == "y"
    ) {
      holdNumbers.push([i + 1]);
    }
  }
  let finalArray = [];
  for (let j = 0; j < holdNumbers.length; j++) {
    finalArray.push(holdNumbers[j][0]);
  }

  return finalArray;
}

console.log(vowelIndices("YoMama"));
