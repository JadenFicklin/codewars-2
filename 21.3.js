//you now have an array of the users video array from their database
const usersVideos = [
  "video1",
  "video2",
  "video3",
  "video4",
  "video5",
  "video6",
];

//take these videos and display a random one
//push that displayed random video and push it into a watched array

const randomVideo = (param) => {
  const randomElement = param[Math.floor(Math.random() * param.length)];

  const watchedArr = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i].includes(randomElement)) {
      const splicedElement = param.splice([i], 1);
      watchedArr.push(splicedElement);
    }
  }
  console.log(watchedArr[0]);
  return param;
};
console.log(randomVideo(usersVideos));
