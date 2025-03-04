import type { IPersistency } from "../classes/interfaces/persistency";

export class Persistency implements IPersistency {
	saveOrder(): void {
		console.log("Pedido salvo com sucesso.");
	}
}
