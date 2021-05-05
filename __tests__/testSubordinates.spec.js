const { getSubordinates } = require('../deputyTest');
describe("getSubordinates functionality", () => {
	test("it should provide all four subordinates under ID1", () => {
		const input = 1;
		const output = [{"Id":4,"Name":"Mary Manager","Role":2},{"Id":3,"Name":"Sam Supervisor","Role":3},{"Id":2,"Name":"Emily Employee","Role":4},{"Id":5,"Name":"Steve Trainer","Role":5}];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide no subordinates under ID2", () => {
		const input = 2;
		const output = [];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide two specific subordinates under ID3", () => {
		const input = 3;
		const output = [{"Id":2,"Name":"Emily Employee","Role":4},{"Id":5,"Name":"Steve Trainer","Role":5}];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide three specific subordinates under ID4", () => {
		const input = 4;
		const output = [{"Id":3,"Name":"Sam Supervisor","Role":3},{"Id":2,"Name":"Emily Employee","Role":4},{"Id":5,"Name":"Steve Trainer","Role":5}];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide no subordinates under ID5", () => {
		const input = 5;
		const output = [];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide no subordinates if an invalid value is provided (User ID 0, does not exist)", () => {
		const input = 0;
		const output = [];
		expect(getSubordinates(input)).toEqual(output);
	});
	test("it should provide no subordinates if an invalid value is provided (User ID -1, does not exist)", () => {
		const input = -1;
		const output = [];
		expect(getSubordinates(input)).toEqual(output);
	});
});
