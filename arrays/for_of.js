const getCleanMessages = (messages, badWord) => {
  const nonExplicit = [];
  for (const word of messages) {
    if (!word.toLowerCase().includes(badWord.toLowerCase())) {
      nonExplicit.push(word);
    }
  }
  return nonExplicit;
};

const tests = [
  {
    messages: [
      "I am a man of constant sorrow",
      "I've seen trouble all my days",
      "Parched and dusty",
      "nuthin' a hot bath won't cure",
    ],
    badWords: "trouble",

    expected: [
      "I am a man of constant sorrow",
      "Parched and dusty",
      "nuthin' a hot bath won't cure",
    ],
  },
  {
    messages: [
      "Damn, we're in a tight spot!",
      "Well, ain't this place a geographical oddity.",
      "Two weeks from everywhere!",
    ],
    badWords: "damn",

    expected: [
      "Well, ain't this place a geographical oddity.",
      "Two weeks from everywhere!",
    ],
  },
];

const testFunction = (messages, badWord, expected) => {
  if (
    // Nb on the JSON.stringify
    JSON.stringify(getCleanMessages(messages, badWord)) ===
    JSON.stringify(expected)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
};

for (const test of tests) {
  console.log(`Testing no. ${test}`);
  testFunction(test.messages, test.badWords, test.expected);
  console.log("==================================");
}
