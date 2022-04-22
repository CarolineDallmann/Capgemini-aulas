import { IDao } from "./interfaces";

class Item implements IDao{
    descricao: string;
    preco: number;
    qtde: number;
    constructor(descricao: string, preco: number, qtde: number) {
            this.descricao = descricao,
            this.preco = preco,
            this.qtde = qtde
    }
    totalItem(){
        return this.qtde * this.preco
    }

    valorDesconto(desconto:number){
        return this.totalItem() * (desconto/100)
    }

    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    alterar(obj: string): boolean {
        throw new Error("Method not implemented.");
    }
    consultar(): string[] {
        throw new Error("Method not implemented.");
    }
    consultarPorID(id: number): string {
        throw new Error("Method not implemented.");
    }
    deletar(id: number): void {
        throw new Error("Method not implemented.");
    }
}