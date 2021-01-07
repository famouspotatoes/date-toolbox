import isValidTimestamp from './isValidTimestamp'

/**
 * 10 digit second-based timestamps start in 2001 and run thru 2286.
 *
 * We will assume that any positive 10-digit timestamp is valid.
 *
 * @param timestamp
 * @returns {boolean}
 */
const isTimestampInSeconds = (timestamp: unknown): boolean => {
	if (!isValidTimestamp(timestamp)) return false

	const timestampString = typeof timestamp === 'number' ? timestamp.toString() : timestamp

	return (timestampString as string).length === 10
}

export default isTimestampInSeconds
