"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(produto, preco, qtde) {
        this.produto = produto;
        this.preco = preco,
            this.qtde = qtde;
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos() {
        throw new Error("Method not implemented.");
    }
    consultarID(id) {
        throw new Error("Method not implemented.");
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
}
exports.Item = Item;
