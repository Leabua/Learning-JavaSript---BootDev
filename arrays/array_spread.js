const oldMessages = [
  "What is your name? ",
  "How are you doing? ",
  "What time are we meeting?",
];

console.log(oldMessages);

const uploadNewMessages = (oldMessages, newMessages) => {
  return [...oldMessages, ...newMessages];
};

const newMessages = [
  "My name is Leabua",
  "I am doing well, thank you.",
  "I dont know",
];

console.log(newMessages);
const results = uploadNewMessages(oldMessages, newMessages);
console.log(results);

export { uploadNewMessages };
