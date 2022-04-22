import { IDaoGenerica } from "./interfaceGenerics";

class Produto implements IDaoGenerica <Produto>{
    descricao: string;
    valorUnit: number;
    estoque: number;
    constructor(descricao: string, valorUnit: number, estoque: number){
        this.descricao = descricao,
        this.valorUnit = valorUnit,
        this.estoque = estoque
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    consultarTodos(): Produto[] {
        throw new Error("Method not implemented.");
    }
    consultarID(id: number): Produto {
        throw new Error("Method not implemented.");
    }
    alterar(obj: Produto): boolean {
        throw new Error("Method not implemented.");
    }
    
}

export {Produto}