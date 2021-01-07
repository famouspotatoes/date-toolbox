import isFiniteNumber from './isFiniteNumber'

/**
 * Check if unknown value is a valid timestamp.
 *
 * Valid timestamps just have to be finite numbers.
 *
 * @param timestamp
 */
const isValidTimestamp = (timestamp: unknown): boolean => {
	return isFiniteNumber(timestamp)
}

export default isValidTimestamp
