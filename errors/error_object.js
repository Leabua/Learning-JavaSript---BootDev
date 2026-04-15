function createError(message) {
  return new Error(`Error: ${message}`);
}

const test = createError("This is supposed to be the message.");

if (test.message === "Error: This is supposed to be the message.") {
  console.log("Correct");
} else {
  console.log("Wrong");
}
