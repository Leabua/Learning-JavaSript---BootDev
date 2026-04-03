//strings as keys

const network = {
  provider: "Verizon",
  counts: { Verizon: 5, "AT&T": 3, "T-Mobile": 10 },
  expected: 5,
};

function getProviderCount(provider, counts) {
  const ans = counts[provider] ? counts[provider] : 0;
  return ans;
}

console.log(getProviderCount("Verizon", network.counts)); // Output: 5
console.log(getProviderCount("Sprint", network.counts)); // Output: 0
console.log(getProviderCount("AT&T", network.counts)); // Output: 0

// don't touch below this line

export { getProviderCount };
