// This throws an error in console if longer than  limit
const sendMessage = (msg) => {
  const limit = 70;
  if (msg.length > limit) {
    throw new Error("Message is too long.");
  }
  return msg;
};

const expectErrMsg = "Message is too long";
const runCases = [
  {
    input: "Inconceivable!",
    expectErr: undefined,
  },
  {
    input:
      "You keep using that word. I do not think it means what you think it means.",
    expectErr: expectErrMsg,
  },
];

runCases.forEach((testCase) => {
  try {
    const output = sendMessage(testCase.input);
    console.log(`Success: "${output}"`);
  } catch (e) {
    if (e.message === testCase.expectErr) {
      console.log(`Caught Expected Error: ${e.message}`);
    } else {
      console.log(`Caught Unexpected Error: ${e.message}`);
    }
  }
});

export { sendMessage };
