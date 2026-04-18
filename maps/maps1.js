const example = [
  {
    phoneBook: new Map(),
    phoneNumber: "555-1111",
    name: "Geralt",
    expected: new Map([["555-1111", "Geralt"]]),
  },
  {
    phoneBook: new Map([["555-2222", "Ciri"]]),
    phoneNumber: "555-3333",
    name: "Yennefer",
    expected: new Map([
      ["555-2222", "Ciri"],
      ["555-3333", "Yennefer"],
    ]),
  },
];

const addToPhonebook = (phoneNumber, name, phoneBook) => {
  const oldMap = new Map(phoneBook);
  return oldMap.set(phoneNumber, name);
};
const mapsEqual = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key] of map1) {
    if (map1.get(key) !== map2.get(key)) return false;
  }
  return true;
};

const test = (phoneNumber, name, phoneBook, expected) => {
  const result = addToPhonebook(phoneNumber, name, phoneBook);
  if (mapsEqual(result, expected)) {
    return "Correct";
  }
  return "Incorrect";
};

example.forEach((run) => {
  console.log(test(run.phoneNumber, run.name, run.phoneBook, run.expected));
});
