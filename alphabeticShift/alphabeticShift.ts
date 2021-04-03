function alphabeticShift(inputString: string): string {
    const alphabet: string[] = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let shiftedInput = inputString.split("");
    for (let i = 0; i < inputString.length; i++) {
      let index = 0;
      if (shiftedInput[i] !== "z") {
        index = alphabet.indexOf(shiftedInput[i]) + 1;
      }
      shiftedInput[i] = alphabet[index];
    }
    return shiftedInput.join("");
}

console.log(alphabeticShift('crazy'));