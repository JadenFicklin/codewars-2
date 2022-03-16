//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(param) {
  let newStr = "";
  const paramLength = param.length;

  for (let i = 0; i < param.length; i++) {
    if (param[i].match(/[A-Z]/)) {
      newStr += param[i];
    }
  }
  const capsLength = newStr.length;
  const lowercaseLength = paramLength - capsLength;
  if (capsLength === lowercaseLength) {
    return param.toLowerCase();
  } else if (capsLength > lowercaseLength) {
    return param.toUpperCase();
  } else {
    return param.toLowerCase();
  }
}

console.log(solve("COde"));
