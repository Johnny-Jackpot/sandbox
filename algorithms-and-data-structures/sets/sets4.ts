function findFirstUniqueCode(codes: string[]): string {
  const codesSet: Set<string> = new Set();
  const duplicatesSet: Set<string> = new Set();

  codes.forEach((code) => {
    codesSet.has(code) ? duplicatesSet.add(code) : codesSet.add(code);
  });

  for (const code of codes) {
    if (!duplicatesSet.has(code)) {
      return code;
    }
  }

  return "";
}

console.log(findFirstUniqueCode(["A1B2", "C3D4", "E5F6", "A1B2", "G7H8"])); // Expected "C3D4"
console.log(findFirstUniqueCode(["X1Y2", "Z3A4", "X1Y2", "Z3A4"])); // Expected ""
console.log(findFirstUniqueCode(["P9Q8", "R7T6", "U5V4", "W3S2", "U5V4"])); // Expected "P9Q8"

function sortCharacters(input: string): string {
  return input.split("").sort().join("");
}

function findAnagrams(array1: string[], array2: string[]): number {
  const set1: Set<string> = new Set();
  array1.forEach((word) => set1.add(sortCharacters(word)));
  let total = 0;
  array2.forEach((word) => {
    if (set1.has(sortCharacters(word))) {
      total += word.length;
    }
  });

  return total;
}

let array1: string[] = ["cat", "dog", "tac", "god", "act"];
let array2: string[] = ["tca", "ogd", "atc", "taco"];
let result: number = findAnagrams(array1, array2);
console.log(result); // output: 9
