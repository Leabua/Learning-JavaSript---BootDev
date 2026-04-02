function createMessage(phoneNumber, message) {
  // since phoneNumber and message are defined in the function I can use a no colon key -value
  return {
    phoneNumber,
    message,
    messageLength: message.length,
  };
}
const test = createMessage("08106283", "Hi");
console.log(test);

export { createMessage };
