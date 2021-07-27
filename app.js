const express = require('express');
const ExpressError = require('./expressError');
const { mean, median, mode } = require('./helpers');

const app = express();

function handleRequest(request) {
	// Handle no nums in query string
	if (!('nums' in request.query)) {
		throw new ExpressError('Nums are required. Include a query string like ?nums=1,3,5,7', 400);
	}

	const arr = request.query.nums.split(',');
	const problemNums = [];
	for (i in arr) {
		if (isNaN(parseInt(arr[i], 10))) {
			problemNums.push(arr[i]);
		}
	}

	// Handle NaN in query string
	if (problemNums.length > 0) {
		if (problemNums.length === 1) {
			throw new ExpressError(`${problemNums[0]} is not a number.`, 400);
		}
		else {
			throw new ExpressError(`${problemNums.join(', ')} are not numbers.`, 400);
		}
	}

	// Return array of nums
	return arr.map(Number);
}

app.get('/mean', (req, res, next) => {
	const nums = handleRequest(req);
	const value = mean(nums);

	const response = {
		operation : 'mean',
		value
	};
	res.json({ response });
});

app.get('/median', (req, res, next) => {
	const nums = handleRequest(req);
	const value = median(nums);

	const response = {
		operation : 'median',
		value
	};
	res.json({ response });
});

app.get('/mode', (req, res, next) => {
	const nums = handleRequest(req);
	const value = mode(nums);

	const response = {
		operation : 'mode',
		value
	};
	res.json({ response });
});

app.use((req, res, next) => {
	const err = new ExpressError('Page not found.', 404);
	return next(err);
});

app.use((err, req, res, next) => {
	let status = err.status || 500;
	let message = err.message;

	return res.status(status).json({
		error : { message, status }
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
