"use strict";
//<aqui dentro vai o tipo> operador diamante
class Contato {
    constructor(nome) {
        this.nome = nome;
    }
}
function testeGeneric(x) {
    return x;
}
console.log(testeGeneric('ola'));
console.log(testeGeneric(10));
let ct = new Contato('ana');
console.log(testeGeneric(ct));
function lista(n1, n2) {
    let x = [n1, n2];
    return x;
}
console.log(testeGeneric('maria'));
function listaComIdade(p1, p2, p3) {
    console.log(`${p1} ${p2} ${p3}`);
}
listaComIdade('maria', 20, false);
listaComIdade(10, false, 'ola');
listaComIdade('maria', 75, [7, 6.5, 9]);
