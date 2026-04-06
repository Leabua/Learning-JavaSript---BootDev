const email = "1stoob@bo34ot.dev";

// print the first character in the string here
console.log(email[0]);
// print the last character in the string here
console.log(email[email.length - 1]);
// print the entire string here
console.log(email);
// check the number of letters of in the whole email
console.log(email.length);

for (let i = 0; i < email.length; i++) {
  console.log(i + 1, email[i]);
}
for (let i = 0; i < email.length; i++) {
  if (!isNaN(email[i])) {
    console.log(i + 1, email[i], "- This is a number");
  } else {
    console.log(i + 1, email[i], "- This is not a number");
  }
}
for (let i = 0; i < email.length; i++) {
  console.log(i + 1, email[i]);
}
for (let i = 0; i < email.length; i++) {
  console.log(
    !isNaN(email[i])
      ? i + 1 + "." + " " + email[i] + "-this is a number"
      : i + 1 + "." + " " + email[i] + "-this is not a number",
  );
}
