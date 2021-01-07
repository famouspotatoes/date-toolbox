import {isFiniteNumber} from '../src'

it('validates 10', () => {
	expect(isFiniteNumber(10)).toEqual(true)
})

it('validates -10', () => {
	expect(isFiniteNumber(-10)).toEqual(true)
})

it('does not validate infinity', () => {
	expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toEqual(false)
})

it('does not validate negative infinity', () => {
	expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toEqual(false)
})
