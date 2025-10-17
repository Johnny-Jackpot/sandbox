function areDisjoint<T>(arr1: T[], arr2: T[]): boolean {
  const set = new Set(arr1);
  return !arr2.some((item) => set.has(item));
}

console.log(areDisjoint([1, 2], [3, 4]));
console.log(areDisjoint([1, 2], [1, 3, 4]));

function removeDuplicates<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

console.log(removeDuplicates([1, 2, 1, 1, 4, 5, 3, 3, 1, 2, 8, 2, 3]));

function audienceOverlap(market1: number[], market2: number[]): boolean {
  const m1 = new Set(market1);
  return market2.some((id) => m1.has(id));
}

let market1 = [1, 2, 3, 4, 5];
let market2 = [6, 7, 8, 9, 10];

if (audienceOverlap(market1, market2))
  console.log("Yes, there is an audience overlap between both markets.");
else console.log("No, there is no audience overlap between both markets.");

function processIDs(ids: number[]): number[] {
  return Array.from(new Set(ids));
}

// Testing the function.
const ids = [1, 2, 3, 2, 1, 5, 3, 1, 2, 1, 4, 5, 6];
const uniqueIDs = processIDs(ids);
console.log(uniqueIDs); // It should return [1, 2, 3, 5, 4, 6]
console.log(processIDs([]));
