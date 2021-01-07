import {getTimestamp, isTimestampInSeconds} from '../src'

it('produces valid timestamp in seconds', () => {
	expect(isTimestampInSeconds(getTimestamp())).toEqual(true)
})
