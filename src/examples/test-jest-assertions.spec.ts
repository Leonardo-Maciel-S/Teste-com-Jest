describe("Primitive values", () => {
	it("should test jest assertions", () => {
		const number = 10;

		expect(number).toBe(10);
	});
});

describe("Objects", () => {
	it("should test assertions with objects", () => {
		const person = { name: "Leonardo", age: 24 };
		const anotherPerson = { ...person };

		expect(person).toEqual(anotherPerson);
		expect(person).toHaveProperty("age", 24);
	});
});
