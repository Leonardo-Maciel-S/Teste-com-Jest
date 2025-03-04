import type {
	IndividualCustomerProtocol,
	EnterpriseCustomerProtocol,
	ICustomerOrder,
} from "./customer-protocol";

export class IndividualCustomer
	implements IndividualCustomerProtocol, ICustomerOrder
{
	constructor(
		public name: string,
		public lastName: string,
		public cpf: string,
	) {}

	getName(): string {
		return this.name + " " + this.lastName;
	}
	getIDN(): string {
		return this.cpf;
	}
}

export class EnterpriseCustomer
	implements EnterpriseCustomerProtocol, ICustomerOrder
{
	constructor(
		public name: string,
		public cnpj: string,
	) {}
	getName(): string {
		return this.name;
	}
	getIDN(): string {
		return this.cnpj;
	}
}
