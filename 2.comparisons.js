// let messageLen = 10;
// let maxMessageLen = 20;
// console.log(
//   "Trying to send a message of length:",
//   messageLen,
//   "and a max length of:",
//   maxMessageLen,
// );
//
// // don't touch above this line
//
// if (messageLen <= maxMessageLen) {
//   console.log("Message sent");
// } else {
//   console.log("Message not sent");
// }

// let item = !false;
// console.log(item);

// const hasHighOpenRate = true;
// const isRecent = true;
// const hasStrongReplyRate = false;
// const canBeResent = true;
// const isFlaggedAsSpam = false;

// don't touch above this line

// const isHighEngagement =
//   (hasHighOpenRate && isRecent && hasStrongReplyRate) ||
//   (canBeResent && !isFlaggedAsSpam);
//
// // don't touch below this line
//
// console.log(`The campaign is high-engagement: ${isHighEngagement}`);

const retryLimit = 10;
const numRetries = 9;

const messageStatus = numRetries < retryLimit ? "Processing" : "Failed";

console.log(messageStatus);

const fullName = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;

// don't touch above this line

console.log(
  `Making ${subscriptionType ?? "Guest"} for ${fullName} with ${phoneNumber} on ${provider}.`,
);
