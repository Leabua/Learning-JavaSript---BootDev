// function concat(str1, str2) {
//   return str1 + str2;
// }
//
// // don't touch below this line
//
// console.log(concat("Lane,", " happy birthday!"));
// console.log(concat("Naomi,", " can you call me?"));
// console.log(concat("Juliette,", " where did you go?"));

// function getMonthlyPrice(tier) {
//   if ((tier = "basic")) {
//     return 10000;
//   } else if ((tier = "premium")) {
//     return 15000;
//   } else {
//     return 50000;
//   }
// }
// // don't touch below this line
//
// export { getMonthlyPrice };

// // multiple return values
// function isClean(review) {
//   let clean = true;
//   if (review.includes("dang") || review.includes("shoot") || review.includes("heck")) {
//     clean = false;
//   }
//   return clean
// }
// export { isClean };
//
//
// // Functions as values
// function reformat(message, formatter) {
//   return "TEXTIO: " + formatter(formatter(formatter(message)));
// }
// export { reformat };
//
// // scope
// function getMessageStatus(message) {
//   let messageStatus = "processing";
//
//   function isValidLength(message) {
//     let messageStatus = "invalid";
//
//     if (message.length > 0) {
//       messageStatus = "valid";
//     }
//
//     return messageStatus;
//   }
//
//   // don't touch above this line
//
//   return isValidLength(message);
// }
//
// // don't touch below this line
//
// export { getMessageStatus };

// function printReports(intro, body, outro) {
//   printCostReport(function (message) {
//     return message.length * 2;
//   }, intro);
//   printCostReport(function (message) {
//     return message.length * 3;
//   }, body);
//   printCostReport(function (message) {
//     return message.length * 4;
//   }, outro);
// }
//
// // don't touch below this line
//
// function printCostReport(costCalculator, message) {
//   const cost = costCalculator(message);
//   console.log(`Message: "${message}" Cost: ${cost} cents`);
// }
//
// printReports(
//   "Welcome to the Hotel California",
//   "Such a lovely place",
//   "Plenty of room at the Hotel California",
// );

function createContact(
  phoneNumber,
  name = "Anonymous",
  avatar = "default.jpg",
) {
  if (!phoneNumber) {
    return "Invalid phone number";
  } else {
    const avatarFilePath = `/public/pictures/${avatar}`;
    return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${avatarFilePath}`;
  }
}

// don't touch below this line

export { createContact };
