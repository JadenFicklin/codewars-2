//get database videos and push them all to specific users unwatched videos database

const users = ["jado123", "f", "batman"];
const databaseVideos = ["video1", "video2", "video3"];

const videos = (param1, param2) => {
  const allVideosFromDatabase = param2;

  //this represents videos already in the users video database
  const usersAddedVideos = ["video1"];

  //this will push all new videos from the database into the specified usernames database
  for (let i = 0; i < param1.length; i++) {
    if (users[i].includes("jado123")) {
      usersAddedVideos.push(...allVideosFromDatabase);
    }
  }

  //this will remove video duplicates
  let result = [];
  usersAddedVideos.forEach((item, index) => {
    if (usersAddedVideos.indexOf(item) == index) result.push(item);
  });

  //returns the new array with new videos and no duplicates
  return result;
};

console.log(videos(users, databaseVideos));
