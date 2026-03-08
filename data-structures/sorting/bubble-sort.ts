type CompareFunc = (a: number, b: number) => boolean;

const less    = (a: number, b: number): boolean => a < b;
const greater = (a: number, b: number): boolean => a > b;

// Basic Bubble Sort — O(n²)
function bubbleSort(arr: number[], compare: CompareFunc): void {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Modified Bubble Sort — stops early if no swaps occurred (best case O(n))
function bubbleSortImproved(arr: number[], compare: CompareFunc): void {
  const size = arr.length;
  let swapped = 1;
  for (let i = 0; i < size - 1 && swapped === 1; i++) {
    swapped = 0;
    for (let j = 0; j < size - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = 1;
      }
    }
  }
}

// --- Example usage ---
const array1 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
bubbleSort(array1, greater);
console.log(`Ascending:  ${JSON.stringify(array1)}`);  // [1,2,3,4,5,6,7,8,9]

const array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
bubbleSort(array2, less);
console.log(`Descending: ${JSON.stringify(array2)}`);  // [9,8,7,6,5,4,3,2,1]

const array3 = [1, 2, 3, 5, 4];                       // nearly sorted
bubbleSortImproved(array3, greater);
console.log(`Improved:   ${JSON.stringify(array3)}`);  // [1,2,3,4,5]
