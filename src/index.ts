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

// Export default and module.exports for compat with
// ES5- and ES6+
module.exports = isValidDate
export default isValidDate
