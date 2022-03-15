//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
//The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, op) {
  const toLower = op.toLowerCase();
  if (toLower === "add") {
    return a + b;
  } else if (toLower === "subtract") {
    return a - b;
  } else if (toLower === "devide") {
    return a / b;
  } else if (toLower === "multiply") {
    return a * b;
  } else {
    console.log("not a valid operator");
  }
}

console.log(arithmetic(456, 7, "devide"));
