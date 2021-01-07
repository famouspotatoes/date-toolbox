import {getTimestamp, isValidTimestamp} from '../src/index'

it('Validates timestamp (number)', () => {
	expect(isValidTimestamp(getTimestamp())).toEqual(true)
})

it('Validates timestamp (string)', () => {
	expect(isValidTimestamp(getTimestamp().toString())).toEqual(true)
})

it('Validates negative timestamp', () => {
	expect(isValidTimestamp(0 - getTimestamp())).toEqual(true)
})

it('Validates zero', () => {
	expect(isValidTimestamp(0)).toEqual(true)
})

it('Does not validate infinity', () => {
	expect(isValidTimestamp(Number.POSITIVE_INFINITY)).toEqual(false)
})

it('Does not validate negative infinity', () => {
	expect(isValidTimestamp(Number.NEGATIVE_INFINITY)).toEqual(false)
})

it('Does not validate non-numeric string', () => {
	expect(isValidTimestamp('non-numeric string')).toEqual(false)
})
