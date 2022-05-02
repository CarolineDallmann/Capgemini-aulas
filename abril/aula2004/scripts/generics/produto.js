"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(descricao, valorUnit, estoque) {
        this.descricao = descricao,
            this.estoque = estoque,
            this.valorUnit = valorUnit;
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
exports.Produto = Produto;
