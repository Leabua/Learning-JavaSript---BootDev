function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test(ms) {
  console.log("Starting now.");
  await sleep(ms);
  console.log(`Finsihed in ${ms / 1000} seconds.`);
}

async function main() {
  const start = Date.now();
  await test(1000);
  await test(2000);
  await test(3000);

  const end = Date.now();
  console.log(`Total: ${(end - start) / 1000} seconds`);
}

main();
