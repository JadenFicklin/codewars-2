// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// function removeUrlAnchor(url) {
//   const splitString = url.split("#");
//   return splitString[0];
// }

r = (u) => u.split("#")[0];

console.log(r("www.codewars.com#about"));
