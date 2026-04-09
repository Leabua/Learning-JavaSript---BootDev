const badWords = ["dang", "shoot", "heck"];

function getCleanRank(reviewWords) {
  let count = 0;

  // we use of for looking at values and in for looking at indexes
  for (const word of reviewWords) {
    // js makes you ask if thee badWords include the word whereas Pyhton reads the opposite way
    if (badWords.includes(word)) {
      count++;
    }
  }

  if (count === 1) {
    return `${count} bad words. Therefore dirty.`;
  } else if (count >= 2) {
    return `${count} bad words. Therefore filthy.`;
  } else {
    return `${count} bad words. Therefore clean.`;
  }
}

// const test1 = ["what", "a", "bad", "film"]; //clean
// const test2 = ["oh", "my", "heck", "I", "hated", "it"]; // dirty
// const test3 = ["ripoff"]; // clean
// const test4 = ["That", "was", "a", "pleasure"]; // clean
// const test5 = ["dang", "shoot", "heck"]; //filthy

// console.log(getCleanRank(test1));
// console.log(getCleanRank(test2));
// console.log(getCleanRank(test3));
// console.log(getCleanRank(test4));
// console.log(getCleanRank(test5));

export { getCleanRank };
