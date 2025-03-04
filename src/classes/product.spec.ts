import { Product } from "./product";

const createSut = (name: string, price: number) => {
	return new Product(name, price);
};

describe("Product", () => {
	it("should create instance of product", () => {
		const sut = createSut("camiseta", 49.9);

		expect(sut).toBeInstanceOf(Product);
	});

	it("should create product with name = camiseta and price = 49,9", () => {
		const sut = createSut("camiseta", 49.9);

		expect(sut).toEqual({ name: "camiseta", price: 49.9 });
	});
});
