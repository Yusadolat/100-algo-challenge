function sumAllPrimes(num: number): number {
  let primeTotal = 0;
  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        primeTotal += i;
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return primeTotal;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
