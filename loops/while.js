function getMaxMessagesToSend(costMultiplier, maxCostInPennies) {
  let actualCostInPennies = 1.0;
  let maxMessagesToSend = 1;
  let balance = maxCostInPennies - actualCostInPennies;
  while (balance > 0) {
    actualCostInPennies *= costMultiplier;
    balance -= actualCostInPennies;
    maxMessagesToSend++;
  }
  if (balance < 0) {
    maxMessagesToSend--;
  }
  return maxMessagesToSend;
}

console.log(getMaxMessagesToSend(2, 10)); // costMultiplier=2, 10 pennies
console.log(getMaxMessagesToSend(2, 100)); // costMultiplier=2, 100 pennies
console.log(getMaxMessagesToSend(1.5, 10)); // costMultiplier=1.5, 10 pennies
export { getMaxMessagesToSend };
