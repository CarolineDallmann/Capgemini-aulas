function teste(n1, n2) {
    try {
        if (n2 === 0) {
            throw "Não é possível dividir por zero"
        }
        let x = n1 / n2
        console.log(x);
    }
    catch (erro) {
        console.log(`Erro: ${erro}`);
    }
}

// teste(10, 0)

function pegaDadosArray() {

    let a = [1, 2, 3, 4, 5, 6]
    try {
        let i = 6
        if(i >= a.length){
            throw 'Indice inválido'
        }
        let x = a[6]
        console.log(x);
    }
    catch (erro) {
        console.log(erro);
    }
}
pegaDadosArray()

