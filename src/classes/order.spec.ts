import { ShoppingCart } from "./shopping-cart";
import { Order } from "./order";
import type { IShoppingCart } from "./interfaces/shopping-cart-protocol";
import type { CartItem } from "./interfaces/cart-item";
import type { ICustomerOrder } from "./customer-protocol";
import type { IPersistency } from "./interfaces/persistency";
import type { IMessaging } from "./interfaces/messaging";

class ShoppingCartMock implements IShoppingCart {
	items: readonly CartItem[] = [];

	addItem(item: CartItem): void {}
	removeItem(index: number): void {}
	total(): number {
		return 1;
	}
	totalWithDiscount(): number {
		return 1;
	}
	isEmpty(): boolean {
		return false;
	}
	clear(): void {}
}

class MessagingMock implements IMessaging {
	sendMessage(txt: string): void {}
}

class PersistencyMock implements IPersistency {
	saveOrder(): void {}
}

class CustomerMock implements ICustomerOrder {
	getName(): string {
		return "";
	}
	getIDN(): string {
		return "";
	}
}

const createSut = () => {
	const shoppingCartMock = new ShoppingCartMock();
	const messagingMock = new MessagingMock();
	const persistencyMock = new PersistencyMock();
	const customerMock = new CustomerMock();

	const sut = new Order(
		shoppingCartMock,
		messagingMock,
		persistencyMock,
		customerMock,
	);

	return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe("Order", () => {
	it("should not checkout if cart is empty", () => {
		const { sut, shoppingCartMock } = createSut();
		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, "isEmpty")
			.mockReturnValue(true);

		sut.checkout();

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
		expect(sut.orderStatus).toBe("open");
	});

	it("should checkout if cart is not empty", () => {
		const { sut, shoppingCartMock } = createSut();
		const shoppingCartMockSpy = jest
			.spyOn(shoppingCartMock, "isEmpty")
			.mockReturnValue(false);

		sut.checkout();

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
		expect(sut.orderStatus).toBe("closed");
	});

	it("should send an email to customer", () => {
		const { sut, messagingMock, shoppingCartMock } = createSut();

		const messagingMockSpy = jest.spyOn(messagingMock, "sendMessage");

		sut.checkout();

		expect(messagingMockSpy).toHaveBeenCalledTimes(1);
	});

	it("should save order", () => {
		const { sut, persistencyMock } = createSut();
		const persistencyMockSpy = jest.spyOn(persistencyMock, "saveOrder");

		sut.checkout();

		expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
	});

	it("should clear cart", () => {
		const { sut, shoppingCartMock } = createSut();
		const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, "clear");

		sut.checkout();

		expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
	});
});
