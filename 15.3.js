//count the bumps in the road "n" if its over 15 then return car dead, otherwhise return woohoo!

function bump(param) {
  const splitArr = param.split("");
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i] === "n") {
      arr1.push("n");
    } else {
      arr2.push("_");
    }
  }
  if (arr1.length <= 15) {
    return "Woohoo!";
  } else {
    return "Car Dead";
  }
}

console.log(bump("______n___n_"));
