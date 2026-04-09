const getMostRecentUser = (usernames) => {
  if (usernames.length === 0) {
    return null;
  } else {
    return usernames[usernames.length - 1];
  }
};

const test0 = [];
const test1 = ["Frodo", "Gandalf", "Legolas"];
const test2 = ["DoomGuy", "MasterChief", "Geralt"];
const test3 = ["Sephiroth"];

console.log(getMostRecentUser(test0)); // null
console.log(getMostRecentUser(test1)); // Legolas
console.log(getMostRecentUser(test2)); // Geralt
console.log(getMostRecentUser(test3)); // Sepiroth

export { getMostRecentUser };
