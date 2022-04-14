var urlBase = "http://localhost:3000/contatos"

class Contato {
    constructor(id, nome, telefone, email) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    salvar() {
        fetch(urlBase, {
            method: "POST",
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(erro => console.log(erro))
    }
    consultarTodos(display) {
        fetch(urlBase)
            .then(x => x.text())
            .then(data => display(data))
    }

    consultarPeloID(idContato, display) {
        fetch(`${urlBase}/${idContato}`)
            .then(x => x.text())
            .then(data => display(data))
    }

    update() {
        fetch(`${urlBase}/${this.id}`, {
            method: "PUT",
            body: JSON.stringify(this),
            headers: {
                'Content-Type': 'application/json'
            }
        })


    }

    delete(idContato) {
        fetch(`${urlBase}/${idContato}`, {
            method: "DELETE"
        })
    }

}



