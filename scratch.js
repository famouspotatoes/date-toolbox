/**
 * Determine if an unknown value is numeric.
 *
 * @param n
 */
const isNumeric = (n) => {
	return !Number.isNaN(parseFloat(n)) && Number.isFinite(n)
}

/**
 * Check if unknown value is a valid timestamp
 *
 * @param _timestamp
 */
const isValidTimestamp = (_timestamp) => {
	const newTimestamp = new Date(_timestamp).getTime()
	return isNumeric(newTimestamp)
}

const timestamp = new Date().valueOf()
console.log('timestamp', timestamp)
