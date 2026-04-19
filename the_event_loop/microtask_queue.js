const runCases = {
  data: "Excuse me can I talk to you for a minute",
  expected:
    "Analyzing...- Processing: Excuse me can I talk to you for a minute - Finished!",
};

async function processAnalytics(data) {
  let analysis = "";

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(analysis);
    }, 100);

    setTimeout(() => {
      analysis += " - Finished!";
    }, 0);

    // don't touch above this line

    // this is my microtask
    Promise.resolve().then(() => {
      console.log(`- Processing: ${data}`);
    });

    // don't touch below this line

    analysis += "Analyzing...";
  });
}

processAnalytics(runCases.data).then((result) => {
  const output = "Analyzing... - Finished!"; // this is all that's in `analysis`
  if (result === output) {
    console.log("Wallahi it worked");
  }
});
