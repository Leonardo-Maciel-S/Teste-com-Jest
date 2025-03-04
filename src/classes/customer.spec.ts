import { EnterpriseCustomer, IndividualCustomer } from "./customer";

const createIndividualCustomer = (
	name: string,
	lastName: string,
	cpf: string,
) => {
	return new IndividualCustomer(name, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
	return new EnterpriseCustomer(name, cnpj);
};

describe("IndividualCustomer", () => {
	it("should have property name, lastName and cpf", () => {
		const sut = createIndividualCustomer(
			"Leonardo",
			"Maciel",
			"000.000.000-00",
		);

		expect(sut).toHaveProperty("name", "Leonardo");
		expect(sut).toHaveProperty("lastName", "Maciel");
		expect(sut).toHaveProperty("cpf", "000.000.000-00");
	});

	it("should have method to getName and getIDN", () => {
		const sut = createIndividualCustomer(
			"Leonardo",
			"Maciel",
			"000.000.000-00",
		);

		expect(sut.getName()).toBe("Leonardo Maciel");
		expect(sut.getIDN()).toBe("000.000.000-00");
	});
});

describe("EnterpriseCustomer", () => {
	it("should have property name and cnpj", () => {
		const sut = createEnterpriseCustomer(
			"Xamanx Enterprise",
			"000.000.000/0001-00",
		);

		expect(sut).toHaveProperty("name", "Xamanx Enterprise");
		expect(sut).toHaveProperty("cnpj", "000.000.000/0001-00");
	});

	it("should have method to getName and getIDN", () => {
		const sut = createEnterpriseCustomer(
			"Leonardo Enterprise",
			"000.000.000/0001-00",
		);

		expect(sut.getName()).toBe("Leonardo Enterprise");
		expect(sut.getIDN()).toBe("000.000.000/0001-00");
	});
});
