import Pessoa from "./pessoa";

class PessoaFisica extends Pessoa {
    cpf: string;
    constructor(id: number, nome: string, contato: string, cpf: string,) {
        super(id, nome, contato)
        this.cpf = cpf
    }
    display(): string {
        return `${super.display()} CPF: ${this.cpf}`
    }

    salvar(): boolean {
        console.log('salvando');
        return true
    }
}

let pf: PessoaFisica = new PessoaFisica(2, 'ana', '88888', '06928')//herança
console.log(pf.display());//polimorfismo

