function maxMessagesWithinBudget(budget) {
  let totalCost = 0;
  let count = 0;

  let thisMessage = 0;
  for (let i = 0; ; i++) {
    thisMessage = 1.0 + i * 0.01;
    if (totalCost + thisMessage >= budget) {
      break;
    } else {
      count++;
      totalCost += thisMessage;
    }
  }

  return { count, totalCost };
}

const cost = maxMessagesWithinBudget(100);
console.log(`count: ${cost.count}, Total Cost: ${cost.totalCost}`);
export { maxMessagesWithinBudget };
