const sentMessages = [];
sentMessages.push("Welcome to TextIO!");

//logArray is used to print the array
logArray(sentMessages);

sentMessages.push("Reminder: Your payment is due soon.");
logArray(sentMessages);

// don't touch below this line

function logArray(array) {
  console.log("Array contents:");
  for (const elements of array) {
    console.log(` - ${elements}`);
  }
  console.log("=======================================");
}
