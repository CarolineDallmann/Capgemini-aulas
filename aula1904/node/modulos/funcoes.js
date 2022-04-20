var soma = function (n1, n2) {
    return n1 + n2
}

var subtracao = (n1, n2) => {
    return n1 - n2
}

var multiplicacao = (n1, n2) => {
    try{
        if(n1  === undefined || n2 === undefined)
        throw "Informe um valor"
    }
    catch (erro) {
        return erro
    }
    return n1 * n2
}

var divisao = (n1, n2) => {
    try {
        if (n2 === 0) {
            throw "Nao e possivel dividir por zero"
        }
        if (n1  === undefined || n2 === undefined) {
            throw "Informe um valor"
        }
        return n1 / n2
    }
    catch (erro) {
        return erro
    }
   
}




module.exports = { soma, subtracao, multiplicacao, divisao }