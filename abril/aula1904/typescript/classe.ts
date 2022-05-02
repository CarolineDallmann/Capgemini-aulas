class Contato2 {
    id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    display(): void {
        console.log(`ID: ${this.id} Nome: ${this.nome}`);
    }
}

let cont = new Contato2(10, 'ana')
console.log(cont);
cont.display()
