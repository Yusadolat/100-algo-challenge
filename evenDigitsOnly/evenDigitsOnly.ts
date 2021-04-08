function evenDigitsOnly(n: number): boolean {
  const element = n.toString().split(" ");
  return element.every((element) => parseInt(element) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
