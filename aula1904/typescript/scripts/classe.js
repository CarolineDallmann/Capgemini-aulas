"use strict";
class Contato2 {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    display() {
        console.log(`ID: ${this.id} Nome: ${this.nome}`);
    }
}
let cont = new Contato2(10, 'ana');
console.log(cont);
cont.display();
