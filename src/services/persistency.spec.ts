import { Persistency } from "./persistency";

describe("Persistency", () => {
	afterEach(() => jest.clearAllMocks());

	it("should return undefined", () => {
		const sut = new Persistency(); // SUT = System under Test

		expect(sut.saveOrder()).toBeUndefined();
	});

	it("should call console.log once", () => {
		const sut = new Persistency(); // SUT = System under Test
		const consoleSpy = jest.spyOn(console, "log");

		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it("should call console.log with 'Pedido salvo com sucesso.'", () => {
		const sut = new Persistency(); // SUT = System under Test
		const consoleSpy = jest.spyOn(console, "log");

		sut.saveOrder();

		expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso.");
	});
});
