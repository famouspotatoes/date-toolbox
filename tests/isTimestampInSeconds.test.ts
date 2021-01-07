import {getTimestamp, isTimestampInSeconds} from '../src';

it('Validates current timestamp (string)', () => {
	expect(isTimestampInSeconds(getTimestamp().toString())).toEqual(true);
});

it('Validates current timestamp (number)', () => {
	expect(isTimestampInSeconds(getTimestamp())).toEqual(true);
});

it('Does not validate millisecond timestamp (string)', () => {
	expect(isTimestampInSeconds('1609984676654')).toEqual(false);
});

it('Does not validate millisecond timestamp (number)', () => {
	expect(isTimestampInSeconds(1609984676654)).toEqual(false);
});

it('Does not validate non-numeric string', () => {
	expect(isTimestampInSeconds('non-numeric string')).toEqual(false);
});
