import {isValidDate} from '../src/index'

it('Validates current date', () => {
	const date = new Date()
	expect(isValidDate(date)).toEqual(true)
})

it("Doesn't validate date string", () => {
	const date = new Date().toDateString()
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate iso string", () => {
	const date = new Date().toISOString()
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate time string", () => {
	const date = new Date().toTimeString()
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate utc string", () => {
	const date = new Date().toUTCString()
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate string", () => {
	const date = new Date().toString()
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate epoch seconds timestamp", () => {
	const date = new Date().getTime() / 1000
	expect(isValidDate(date)).toEqual(false)
})

it("Doesn't validate epoch milliseconds timestamp", () => {
	const date = new Date().valueOf()
	expect(isValidDate(date)).toEqual(false)
})


