function salvar() {

    let descricao = document.querySelector("#descricao")
    let precoUnit = document.querySelector("#precoUnit")
    let unidadeMedida = document.querySelector("#unidadeMedida")
    let fornecedor = document.querySelector("#fornecedor")


    if (descricao.value === "") {
        alert('Informe a descrição')
        descricao.focus()
        return
    }
    if (precoUnit.value === "") {
        alert('Informe o preço unitário')
        precoUnit.focus()
        return
    }
    if (unidadeMedida.value === "") {
        alert('Informe a unidade de medida')
        unidadeMedida.focus()
        return
    }
    if (fornecedor.value === "") {
        alert('Informe o fornecedor')
        fornecedor.focus()
        return
    }

    document.getElementsByTagName("form")[0].submit()
}

function cancelar() {
    descricao.value = ''
    precoUnit.value = ''
    unidadeMedida.value = ''
    fornecedor.value = ''
}

function loadCategoria() {
    fetch('http://localhost:3000/categoria')
        .then(x => x.text())
        .then(cat => display(cat))
}

function display(dados) {
    let lista = JSON.parse(dados)
    let opt = ""
    for (let obj in lista) {
        opt += '<option var=' + lista[obj].id + ">" + lista[obj].nome + '</option>'
    }
    document.querySelector("#categoria").innerHTML = opt
}