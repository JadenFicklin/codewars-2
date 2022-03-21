//return a random number of an array
const randomNumber = (param) => {
  return param[Math.floor(Math.random() * param.length)];
};

console.log(randomNumber([5, 2, 3, 56, 8, 6, 9]));
