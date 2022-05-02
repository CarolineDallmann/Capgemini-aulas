"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(data, cliente) {
        this.data = data,
            this.cliente = cliente;
    }
    salvar() {
        console.log('Venda cadastrada com sucesso');
        return true;
    }
    alterar(obj) {
        console.log('venda alterada com sucesso');
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorID(id) {
        return " maria";
    }
    deletar(id) {
        console.log('venda excluida com sucesso');
    }
}
let v1;
v1 = new Venda('20/04/2022', 'Maria');
v1.salvar();
v1.alterar('maria');
