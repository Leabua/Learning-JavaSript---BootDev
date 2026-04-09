const splitLogs = (logs, slug) => {
  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes(slug)) {
      return {
        before: logs.slice(0, i),
        i,
        after: logs.slice(i + 1),
      };
    }
  }
  return {
    before: [],
    i: -1,
    after: [],
  };
};

const runCases = [
  {
    logs: [
      "error at line 10",
      "warning at line 15",
      "the dev who wrote line 21 should be fired",
      "debug info",
      "error at line 20",
      "user login",
    ],
    slug: "debug",
    expected: {
      before: [
        "error at line 10",
        "warning at line 15",
        "the dev who wrote line 21 should be fired",
      ],
      i: 3,
      after: ["error at line 20", "user login"],
    },
  },
  {
    logs: [
      "start",
      "process 1: WARMING",
      "this is the end",
      "wait some more stuff happened here",
    ],
    slug: "process 1",
    expected: {
      before: ["start"],
      i: 1,
      after: ["this is the end", "wait some more stuff happened here"],
    },
  },
  {
    logs: ["error: bug found", "other log"],
    slug: "bug",
    expected: {
      before: [],
      i: 0,
      after: ["other log"],
    },
  },
];

const testCase = (expected, logs, slug) => {
  if (JSON.stringify(splitLogs(logs, slug)) === JSON.stringify(expected)) {
    console.log("true");
  } else {
    console.log("false");
  }
};

for (const tests of runCases) {
  testCase(tests.expected, tests.logs, tests.slug);
}

export { splitLogs };
