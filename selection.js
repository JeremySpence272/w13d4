// selection.js

const selectionSort = (arr) => {
	let comparisons = 0,
		swaps = 0;
	const startTime = performance.now();

	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;

		for (let j = i; j < arr.length; j++) {
			comparisons++;
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (i !== minIndex) {
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
			swaps++;
		}
	}

	const endTime = performance.now();
	return {
		sortedArray: [...arr],
		comparisons,
		swaps,
		timeTaken: endTime - startTime,
	};
};

module.exports = selectionSort;
