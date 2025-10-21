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
    isTargetInRightPart: (currentNum: number) => boolean
  ) => {
    while (startIndex <= endIndex) {
      const midIndex: number = Math.floor((startIndex + endIndex) / 2);
      const currenNum = arr[midIndex];
      if (currenNum === target) return midIndex;
      if (isTargetInRightPart(currenNum)) startIndex = midIndex + 1;
      else endIndex = midIndex - 1;
    }
  };

  const peakIndex = findPeakIndex(arr);

  return (
    runSearch(0, peakIndex, (n: number) => n < target) ||
    runSearch(peakIndex + 1, arr.length - 1, (n: number) => n > target) ||
    -1
  );
}

console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 3));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 1));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 5));
console.log(findIndexInBitonicArray([1, 2, 3, 4, 5, 3, 1], 2));

function findMinimumInRotatedSortedArray(arr: number[]): number {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    const midIndex: number = Math.floor((startIndex + endIndex) / 2);
    if (arr[midIndex] > arr[endIndex]) startIndex = midIndex + 1;
    else endIndex = midIndex;
  }

  return arr[startIndex];
}

console.log(findMinimumInRotatedSortedArray([3, 4, 5, 1, 2]));
