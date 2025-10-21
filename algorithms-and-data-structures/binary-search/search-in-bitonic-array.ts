function findPeakIndex(arr: number[]): number {
  let startIndex: number = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    const mid: number = Math.floor((startIndex + endIndex) / 2);
    if (arr[mid] > arr[mid + 1]) {
      endIndex = mid;
    } else {
      startIndex = mid + 1;
    }
  }

  return startIndex;
}

console.log(findPeakIndex([1, 2, 3, 4, 2, 1]));

function findIndexInBitonicArray(arr: number[], target: number): number {
  const runSearch = (
    startIndex: number,
    endIndex: number,
    compareFn: (currentNum: number) => boolean
  ) => {
    while (startIndex <= endIndex) {
      const midIndex: number = Math.floor((startIndex + endIndex) / 2);
      const currenNum = arr[midIndex];
      if (currenNum === target) return midIndex;
      if (compareFn(currenNum)) startIndex = midIndex + 1;
      else endIndex = midIndex - 1;
    }
  };

  const peakIndex = findPeakIndex(arr);

  const leftPartStart = 0;
  const leftPartEnd = peakIndex;
  const leftPartCompare = (currentNum: number) => currentNum > target;

  const rightPartStart = peakIndex + 1;
  const rightPartEnd = arr.length - 1;
  const rightPartCompare = (currentNum: number) => currentNum < target;

  return (
    runSearch(leftPartStart, leftPartEnd, leftPartCompare) ||
    runSearch(rightPartStart, rightPartEnd, rightPartCompare) ||
    -1
  );
}

console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 3));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 1));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 5));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 2));
