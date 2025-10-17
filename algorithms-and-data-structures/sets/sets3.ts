function findLastUniqueWord(words: string[]): string {
  const wordsSet: Set<string> = new Set();
  const duplicatesSet: Set<string> = new Set();

  for (const word of words) {
    wordsSet.has(word) ? duplicatesSet.add(word) : wordsSet.add(word);
  }

  for (let i = words.length - 1; i >= 0; i--) {
    if (!duplicatesSet.has(words[i])) {
      return words[i];
    }
  }

  return "";
}
console.log(
  findLastUniqueWord(["apple", "banana", "apple", "orange", "kiwi", "banana"])
);

function sortChars(input: string): string {
  return [...input].sort().join("");
}

function findAnagrams(arr1: string[], arr2: string[]): string[] {
  const sortedWordsInArr2: Set<string> = new Set();
  arr2.forEach((word) => sortedWordsInArr2.add(sortChars(word)));

  return arr1.filter((word) => sortedWordsInArr2.has(sortChars(word)));
}

console.log(findAnagrams(["listen", "google"], ["inlets", "banana", "gogle"]));
