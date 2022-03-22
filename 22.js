//isogram

function isIsogram(str) {
  const toLower = str.toLowerCase();
  const splitString = toLower.split("");

  const uniq = [...new Set(splitString)];
  const joinArray = uniq.join("");

  if (toLower === joinArray) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("jaden"));
