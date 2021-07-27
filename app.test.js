const ExpressError = require('./expressError');
const { mean, median, mode } = require('./helpers');

const arr1 = [ 1, 3, 5, 7 ];
const arr2 = [ 1, 3, 5, 7, 9 ];
const arr3 = [ 5, 3, 13, 1, 2, 3, 8 ];

describe('mean tests', () => {
	test('even number of values', () => {
		expect(mean(arr1)).toEqual(4);
	});
	test('odd number of values', () => {
		expect(mean(arr2)).toEqual(5);
	});
	test('values out of order and unsorted', () => {
		expect(mean(arr3)).toEqual(5);
	});
});

describe('median tests', () => {
	test('even number of values', () => {
		expect(median(arr1)).toEqual(4);
	});
	test('odd number of values', () => {
		expect(median(arr2)).toEqual(5);
	});
	test('values out of order and unsorted', () => {
		expect(median(arr3)).toEqual(3);
	});
});

describe('mode tests', () => {
	test('even number of values', () => {
		expect(mode(arr1)).toEqual([ 1, 3, 5, 7 ]);
	});
	test('odd number of values', () => {
		expect(mode(arr2)).toEqual([ 1, 3, 5, 7, 9 ]);
	});
	test('values out of order and unsorted', () => {
		expect(mode(arr3)).toEqual([ 3 ]);
	});
});
