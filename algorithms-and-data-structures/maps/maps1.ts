let inventory: Map<string, number> = new Map();

inventory.set("milk", 50);
inventory.set("bread", 30);

console.log(inventory.get("milk")); // Outputs: 50
inventory.delete("bread"); // Removes bread from the inventory
console.log(inventory.size); // Outputs: 1

const phrase =
  "TypeScript-is-a-powerful-language-for-static-type-checking-and-enhances-productivity-and-readability-of-code.";
const wordCount = new Map<string, number>();
phrase.split("-").forEach((word) => {
  const normalizedWord = word.toLowerCase().replace(/[^\w\s-]/g, "");
  const frequency = wordCount.get(normalizedWord) || 0;
  wordCount.set(normalizedWord, frequency + 1);
});

console.log(wordCount);

function getTotalStockQuantity(stock: Map<string, number>): number {
  let total = 0;
  for (const [_, num] of stock.entries()) {
    total += num;
  }

  return total;
}

let stock = new Map<string, number>();
stock.set("Apples", 50);
stock.set("Bananas", 100);
stock.set("Oranges", 75);

console.log(getTotalStockQuantity(stock)); // It will log 225

function frequentUser(visits: number[]): number {
  const threshhold = visits.length / 4;
  const frequencies: Map<number, number> = new Map();

  for (let id of visits) {
    let frequency = frequencies.get(id) || 0;
    frequency++;
    if (frequency > threshhold && id !== 0) {
      return id;
    }

    frequencies.set(id, frequency);
  }

  return -1;
}

console.log(`Frequent User: ${frequentUser([1, 2, 3, 1, 2, 3, 1, 2, 3, 1])}`); // Expected output: 1
console.log(
  `Frequent User: ${frequentUser([5, 0, 5, 0, 5, 0, 5, 0, 1, 1, 1, 1, 1])}`
); // Expected output: 5
// Explanation: All users here have more visits than 13/4, so we return the one that appears first in the array, which is 5
console.log(
  `Frequent User: ${frequentUser([3, 2, 2, 1, 3, 2, 3, 0, 0, 1, 1, 4])}`
); // Expected output: -1

function createWordIndex(sentence: string): Map<string, number> {
  let index = new Map<string, number>();

  sentence.split(" ").forEach((word) => {
    if (!word) {
      return;
    }
    const normalizedWord = word.toLowerCase();
    let frequency = index.get(normalizedWord) || 0;
    index.set(normalizedWord, ++frequency);
  });

  return index;
}

let sentence1 = "Hello Hello world world world";
let index1 = createWordIndex(sentence1);
console.log(index1); //Should print: Map { 'hello' => 2, 'world' => 3 }

let sentence2 = "";
let index2 = createWordIndex(sentence2);
console.log(index2); //Should print: Map {}

let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
let index3 = createWordIndex(sentence3);
console.log(index3); //Should print: Map { 'quick' => 2, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'the' => 1, 'lazy' => 1, 'dog' => 1 }
