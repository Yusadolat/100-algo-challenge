function reverseAString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));
