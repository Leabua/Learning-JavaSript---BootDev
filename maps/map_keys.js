const runCases = [
  {
    input: [
      { fname: "Blark", lname: "Kent", promotions: ["promo1", "promo2"] },
    ],
    expected: new Map([
      [
        "Clark Kent",
        { fname: "Clark", lname: "Kent", promotions: ["promo1", "promo2"] },
      ],
    ]),
  },
  {
    input: [],
    expected: new Map(),
  },
];

const createUserMap = (users) => {
  const map = new Map();
  users.forEach((user) => {
    const fullName = `${user.fname} ${user.lname}`;
    map.set(fullName, user);
  });
  return map;
};
