import Pessoa from "./pessoa";

class PessoaJuridica extends Pessoa {
    cnpj: string;
    constructor(id: number, nome: string, contato: string, cnpj: string,) {
        super(id, nome, contato)
        this.cnpj = cnpj
    }
    display(): string {
        return `${super.display()} CNPJ: ${this.cnpj}`
    }

    salvar(): boolean {
        console.log('salvando');
        return true
    }
}

let pj: PessoaJuridica = new PessoaJuridica(3, 'joão', '7777', '069289')//herança
console.log(pj.display()); //polimorfismo