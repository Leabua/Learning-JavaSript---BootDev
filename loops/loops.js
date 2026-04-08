function bulkSendCosts(numMessages) {
  const costs = [];
  for (let i = 0; i < numMessages; i++) {
    costs.push(1 + i / 100);
  }
  return costs;
}

const results = bulkSendCosts(4);
console.log(results);

const total = results.reduce((old, current) => old + current, 0);

console.log(`Total summed: ${total.toFixed(2)}`);
