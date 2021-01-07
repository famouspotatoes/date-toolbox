/**
 * To be a valid date, an unknown value should be
 * both instanceof Date and a valid number.
 *
 * @param d
 */
const isValidDate = (d: unknown): boolean => {
	const isInstanceOfDate = d instanceof Date;
	console.log(isInstanceOfDate);
	const isValidNumber = !Number.isNaN(d as number);
	console.log(isValidNumber);
	return isInstanceOfDate && isValidNumber;
};

export default isValidDate;
