function printPrimes(max) {
  for (let n = 2; n <= max; n++) {
    if (n === 2) {
      console.log(n);
      continue;
    }
    if (n % 2 === 0) {
      continue;
    }

    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      // fix 2: i <= not 3 <=
      if (n % i === 0) {
        isPrime = false;
        break; // fix 3: break not continue
      }
    }

    if (isPrime) {
      console.log(n); // fix 4: outside the inner loop
    }
  }
}

printPrimes(10000000);
console.log("This was JavaScript");
