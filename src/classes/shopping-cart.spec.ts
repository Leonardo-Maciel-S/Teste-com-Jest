import type { CartItem } from "./interfaces/cart-item";
import { Discount } from "./discount";
import { ShoppingCart } from "./shopping-cart";

const createSut = () => {
	const discountMock = createDiscountMock();
	const sut = new ShoppingCart(discountMock);
	return { sut, discountMock };
};

const createDiscountMock = () => {
	class DiscountMock extends Discount {}
	return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
	class CartItemMock implements CartItem {
		constructor(
			public name: string,
			public price: number,
		) {}
	}

	return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
	const { sut, discountMock } = createSut();

	const cartItem1 = createCartItem("camiseta", 40);
	const cartItem2 = createCartItem("caneta", 1);

	sut.addItem(cartItem1);
	sut.addItem(cartItem2);

	return { sut, discountMock };
};

describe("ShoppingCart", () => {
	afterEach(() => jest.clearAllMocks());

	it("should be an empty cart when no products in added", () => {
		const { sut } = createSut();

		expect(sut.isEmpty()).toBe(true);
	});

	it("should have two cartItems", () => {
		const { sut } = createSutWithProducts();
		expect(sut.items.length).toBe(2);
	});

	it("should return total and total with discount", () => {
		const { sut } = createSutWithProducts();

		expect(sut.total()).toBe(41);
		expect(sut.totalWithDiscount()).toBe(41);
	});

	it("should add products and clear cart", () => {
		const { sut } = createSutWithProducts();

		expect(sut.items.length).toBe(2);

		sut.clear();

		expect(sut.items.length).toBe(0);
		expect(sut.isEmpty()).toBe(true);
	});

	it("should remove products", () => {
		const { sut } = createSutWithProducts();

		expect(sut.items.length).toBe(2);

		sut.removeItem(0);

		expect(sut.items.length).toBe(1);

		sut.removeItem(0);

		expect(sut.isEmpty()).toBe(true);
	});

	it("should call discount.calculate once when total with totalWithDiscount is called", () => {
		const { sut, discountMock } = createSutWithProducts();
		const discountMockSpy = jest.spyOn(discountMock, "calculate");

		sut.totalWithDiscount();

		expect(discountMockSpy).toHaveBeenCalledTimes(1);
	});

	it("should call discount.calculate() with total when total with totalWithDiscount is called", () => {
		const { sut, discountMock } = createSutWithProducts();
		const discountMockSpy = jest.spyOn(discountMock, "calculate");

		sut.totalWithDiscount();

		expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
	});
});
