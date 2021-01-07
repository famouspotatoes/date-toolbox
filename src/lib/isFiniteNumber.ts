/**
 * Determine if an unknown value is finite and numeric.
 *
 * Allows numeric strings.
 *
 * @param n
 */
const isFiniteNumber = (n: unknown): boolean => {
	const number = typeof n === 'string' ? parseFloat(n) : n
	return !Number.isNaN(parseFloat(number as string)) && Number.isFinite(number)
}

export default isFiniteNumber
