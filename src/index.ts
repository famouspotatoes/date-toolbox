/**
 * To be a valid date, an unknown value should be
 * both instanceof Date and a valid number.
 *
 * @param d
 */
const isValidDate = (d: unknown): boolean => {
	const isInstanceOfDate = d instanceof Date
	const isValidNumber = !Number.isNaN(d as number)
	return isInstanceOfDate && isValidNumber
}

/**
 * Determine if an unknown value is numeric.
 *
 * @param n
 */
const isNumeric = (n: unknown): boolean => {
	return !Number.isNaN(parseFloat(n as string)) && Number.isFinite(n)
}

/**
 * Check if unknown value is a valid timestamp
 *
 * @param _timestamp
 */
const isValidTimestamp = (_timestamp: unknown): boolean => {
	const newTimestamp = new Date(_timestamp as never).getTime()
	return isNumeric(newTimestamp)
}

const getTimestamp = () => {
	return Math.round(new Date().getTime() / 1000)
}

// Export default and module.exports for compat with
// ES5- and ES6+
module.exports = isValidDate
export default isValidDate

// Named exports
export {isValidTimestamp, isValidDate}
