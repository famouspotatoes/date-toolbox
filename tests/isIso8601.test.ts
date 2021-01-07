import {isIso8601} from '../src';

it('validates ISO 8601', () => {
	expect(isIso8601('2021-01-07T05:11:39.460Z')).toEqual(true);
});

it("doesn't validate mis-spelled ISO 8601", () => {
	expect(isIso8601('2021-01-07T05:11:39.460')).toEqual(false);
});
