"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor(empCode, empName, empFone) {
        this.empCode = empCode;
        this.empName = empName;
        this.empFone = empFone;
    }
    salvar() {
        return true;
    }
    alterar(obj) {
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorID(id) {
        return 'maria';
    }
    deletar(id) {
    }
    getSalary(salario) {
        return salario;
    }
    getManagerName(nome) {
        return nome;
    }
}
