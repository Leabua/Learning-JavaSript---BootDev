// function getPrimaryAndBackupMessages(messages) {
//   if (messages.length >= 1) {
//     return { primary: messages[0], backups: messages.slice(1) };
//   } else {
//     return { primary: undefined, backups: [] };
//   }
// }

const getPrimaryAndBackupMessages = (messages) => {
  const [primary, ...backups] = messages;
  return { primary, backups };
};

const runCases = [
  {
    messages: [
      "Welcome to Textio!",
      "Your order has shipped",
      "Reminder: Payment due soon",
    ],
    expected: {
      primary: "Welcome to Textio!",
      backups: ["Your order has shipped", "Reminder: Payment due soon"],
    },
  },
  {
    messages: ["First Message"],
    expected: { primary: "First Message", backups: [] },
  },
  {
    messages: [],
    expected: { primary: undefined, backups: [] },
  },
];

const test = (messages, expected) => {
  if (
    JSON.stringify(getPrimaryAndBackupMessages(messages)) ===
    JSON.stringify(expected)
  ) {
    console.log("True");
  } else {
    console.log("false");
  }
};

for (let run of runCases) {
  test(run.messages, run.expected);
}

(function (a, b) {
  console.log(a + b);
})(2, 4);

export { getPrimaryAndBackupMessages };
