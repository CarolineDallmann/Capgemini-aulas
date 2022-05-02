type Contato = {
    nome: string;
    id: number;
};

var contato: Contato = { id: 0, nome: '' }
contato.id = 10
contato.nome = 'Carol'

console.log(contato);
console.log(contato.id);
