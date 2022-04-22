"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao,
            this.preco = preco,
            this.qtde = qtde;
    }
    totalItem() {
        return this.qtde * this.preco;
    }
    valorDesconto(desconto) {
        return this.totalItem() * (desconto / 100);
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    consultar() {
        throw new Error("Method not implemented.");
    }
    consultarPorID(id) {
        throw new Error("Method not implemented.");
    }
    deletar(id) {
        throw new Error("Method not implemented.");
    }
}
