// bubble.js

const bubbleSort = (arr) => {
	let comparisons = 0,
		swaps = 0;
	const startTime = performance.now();

	let temp;
	let elemWasSwapped;

	for (let i = 0; i < arr.length - 1; i++) {
		elemWasSwapped = false;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			comparisons++;
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swaps++;
				elemWasSwapped = true;
			}
		}
		if (!elemWasSwapped) break;
	}

	const endTime = performance.now();
	return {
		sortedArray: [...arr],
		comparisons,
		swaps,
		timeTaken: endTime - startTime,
	};
};

module.exports = bubbleSort;
