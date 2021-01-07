/**
 * Determine if an unknown value is numeric.
 *
 * @param n
 */
const isFiniteNumber = (n) => {
	if (typeof n === 'string') n = parseFloat(n)
	return !Number.isNaN(parseFloat(n)) && Number.isFinite(n)
}

/**
 * Check if unknown value is a valid timestamp
 *
 * @param _timestamp
 */
const isValidTimestamp = (_timestamp) => {
	return isFiniteNumber()
}

const currentTimestampInSeconds = new Date().getTime() / 1000
const twoDaysInSeconds = 3 * 24 * 60 * 60
const fourDaysInSeconds = 4 * 24 * 60 * 60
const timestampPlusTwoDays = Math.round(currentTimestampInSeconds + twoDaysInSeconds)

console.log('timestamp', timestampPlusTwoDays)
console.log('isValidTimestamp', isFiniteNumber(Infinity))
