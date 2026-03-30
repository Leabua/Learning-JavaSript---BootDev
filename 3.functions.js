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

// scope
function getMessageStatus(message) {
  let messageStatus = "processing";

  function isValidLength(message) {
    let messageStatus = "invalid";

    if (message.length > 0) {
      messageStatus = "valid";
    }

    return messageStatus;
  }

  // don't touch above this line

  return isValidLength(message);
}

// don't touch below this line

export { getMessageStatus };
