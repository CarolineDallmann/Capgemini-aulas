class PessoaFisica {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf
    }

    set cpf(value) {
        if (value.length === 14) {
            this._cpf = value
        } else {
            console.log('Cpf inválido');
        }
    }
}

let p1 = new PessoaFisica()
p1.cpf = "123.456.789-10"
console.log(p1.cpf);