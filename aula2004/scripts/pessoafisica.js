"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaFisica extends pessoa_1.default {
    constructor(id, nome, contato, cpf) {
        super(id, nome, contato);
        this.cpf = cpf;
    }
    display() {
        return `${super.display()} CPF: ${this.cpf}`;
    }
}
let pf = new PessoaFisica(2, 'ana', '88888', '06928'); //herança
console.log(pf.display()); //polimorfismo
