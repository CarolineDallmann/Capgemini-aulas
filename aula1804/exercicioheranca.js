class Pessoa {
    constructor(nome, contato) {
        this.nome = nome;
        this.contato = contato;
    }
    exibir() {
        console.log(`Nome: ${this.nome}, Telefone: ${this.contato}`)
    }
}
let pessoa1 = new Pessoa('ana', '999')
console.log(pessoa1);
console.log('-----------');
/////////////////////////

class PessoaFisica extends Pessoa {
    constructor(nome, contato, cpf) {
        super(nome, contato);
        this._cpf = cpf;
    }

    set cpfValido(ccpf){
        if(ccpf.length === 14){
            return this._cpf = ccpf
        }
    }


    exibir() {
        console.log(`Nome: ${this.nome}, Telefone: ${this.contato} Cpf: ${this.cpf}`)
    }
}

let pessoaFis1 = new PessoaFisica('maria', '8888', '065765')
console.log(pessoaFis1);
pessoaFis1.exibir()
console.log('-----------');
/////////////////////

class PessoaJuridica extends Pessoa {
    constructor(nome, contato, cnpj) {
        super(nome, contato);
        this.cnpj = cnpj;
    }
    exibir() {
        console.log(`Nome: ${this.nome}, Telefone: ${this.contato} Cnpj: ${this.cnpj}`)
    }
}

let pessoaJur1 = new PessoaJuridica('joão', '333', '065789')
console.log(pessoaJur1);
pessoaJur1.exibir()
///////////////////
