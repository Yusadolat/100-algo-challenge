function stolenLunch(note: string): string {
  const chars: string[] = note.split("");
  let translatedMessage = "";
  const codeDictionary = {
    "0": "a",
    "1": "b",
    "2": "c",
    "3": "d",
    "4": "e",
    "5": "f",
    "6": "g",
    "7": "h",
    "8": "i",
    "9": "j",
  };
  for (let char of chars) {
    translatedMessage += codeDictionary.hasOwnProperty(char)
      ? codeDictionary[char]
      : char;
  }
  return translatedMessage;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
