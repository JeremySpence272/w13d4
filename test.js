const insertionSort = require("./insertion");
const bubbleSort = require("./bubble");
const selectionSort = require("./selection");

const generateRandomArray = (size, max) =>
	Array.from({ length: size }, () => Math.floor(Math.random() * max));

const testArrays = [
	[],
	[1],
	[2, 1],
	[1, 2, 3, 4, 5],
	[5, 4, 3, 2, 1],
	[1, 3, 5, 7, 6, 4, 2],
	[1, 1, 1, 1, 1],
	[8, 1, 2, 2, 3, 4, 1, 5, 6],
	generateRandomArray(10000, 10000),
];

const sortFunctions = [insertionSort, bubbleSort, selectionSort];

sortFunctions.forEach((sortFunc) => {
	console.log(`Testing ${sortFunc.name}`);
	testArrays.forEach((array) => {
		const originalArray = [...array]; // Copy to preserve the original array for logging
		const result = sortFunc(array);
		const isValidSort = isArraySorted(result.sortedArray);
		console.log(
			`Length: [${originalArray.length}], Comparisons: ${
				result.comparisons
			}, Swaps: ${result.swaps}, Time: ${result.timeTaken.toFixed(
				2
			)}ms, Passed: ${isValidSort}`
		);
	});
	console.log("\n");
});

function isArraySorted(array) {
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			return false;
		}
	}
	return true;
}
