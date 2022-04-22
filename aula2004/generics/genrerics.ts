//<aqui dentro vai o tipo> operador diamante


class Contato {
    nome: string;
    constructor(nome: string) {
        this.nome = nome
    }
}

function testeGeneric<T>(x: T): T {
    return x
}

console.log(testeGeneric<string>('ola'));

console.log(testeGeneric<number>(10));

let ct = new Contato('ana')

console.log(testeGeneric<Contato>(ct));

function lista<T>(n1: T, n2: T): T[] {
    let x: T[] = [n1, n2]
    return x
}
console.log(testeGeneric<string>('maria'));

function listaComIdade<T, U, Z>(p1: T, p2: U, p3: Z): void {
    console.log(`${p1} ${p2} ${p3}`);
}

listaComIdade<string, number, boolean>('maria', 20, false);

listaComIdade<number, boolean, string>(10, false, 'ola')

listaComIdade<string, number, number[]>('maria', 75, [7, 6.5, 9])