function mean(arr) {
	let sum = 0;
	for (i in arr) {
		sum += arr[i];
	}
	return sum / arr.length;
}

function median(arr) {
	const sorted = arr.sort((a, b) => {
		return a - b;
	});
	if (sorted.length % 2 === 0) {
		const num1 = sorted[sorted.length / 2 - 1];
		const num2 = sorted[sorted.length / 2];
		return (num1 + num2) / 2;
	}
	else {
		return sorted[Math.floor(sorted.length / 2)];
	}
}

function mode(arr) {
	const modeMap = {};
	for (i in arr) {
		modeMap[arr[i]] = modeMap[arr[i]] + 1 || 1;
	}

	let modes = [];
	let maxInstances = 0;
	for (const key in modeMap) {
		if (modeMap[key] === maxInstances) {
			modes.push(key);
		}
		if (modeMap[key] > maxInstances) {
			modes = [ key ];
			maxInstances = modeMap[key];
		}
	}
	return modes.map(Number);
}

module.exports = { mean, median, mode };
