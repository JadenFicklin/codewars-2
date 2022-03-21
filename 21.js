//remove all vowels from the input string

function disemvowel(param) {
  const seperateParam = param.split("");

  for (let i = 0; i < seperateParam.length; i++) {
    if (
      seperateParam[i].includes("a") ||
      seperateParam[i].includes("A") ||
      seperateParam[i].includes("e") ||
      seperateParam[i].includes("E") ||
      seperateParam[i].includes("i") ||
      seperateParam[i].includes("I") ||
      seperateParam[i].includes("o") ||
      seperateParam[i].includes("O") ||
      seperateParam[i].includes("u") ||
      seperateParam[i].includes("U")
    ) {
      seperateParam.splice([i], 1);
    }
  }
  const joinParam = seperateParam.join("");
  return joinParam;
}

console.log(disemvowel("What are you, a communist?"));
