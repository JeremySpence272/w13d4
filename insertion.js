// insertion.js

const insertionSort = (arr) => {
	let comparisons = 0,
		swaps = 0;
	const startTime = performance.now();

	let sortedArr = [arr[0]];

	for (let i = 1; i < arr.length; i++) {
		let inserted = false;
		for (let j = 0; j < sortedArr.length; j++) {
			comparisons++;
			if (sortedArr[j] > arr[i]) {
				sortedArr.splice(j, 0, arr[i]);
				swaps++;
				inserted = true;
				break;
			}
		}
		if (!inserted) sortedArr.push(arr[i]);
	}

	const endTime = performance.now();
	return {
		sortedArray: sortedArr,
		comparisons,
		swaps,
		timeTaken: endTime - startTime,
	};
};

module.exports = insertionSort;
