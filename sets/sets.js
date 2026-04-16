const deDuplicateEmails = (emails) => {
  return new Set(emails);
};

const runCases = [
  "wayne.lagner@dev.boot",
  "heckmann@what.de",
  "heckmann@what.de",
  "a.liar@pants.fire",
  "heckmann@what.de",
  "heckmann@what.de",
  "a.liar@pants.fire",
  "a.liar@pants.fire",
];

console.log(deDuplicateEmails(runCases));
