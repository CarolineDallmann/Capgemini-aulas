// function ola(nome, sobrenome, idade){

//     alert(`Olá ${nome} ${sobrenome}, você tem ${idade} anos e é ${idade >= 18 ? 'maior' : 'menor'} de idade.`)
// }

function oi() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let idade = document.getElementById('idade').value

    alert(`Olá ${nome} ${sobrenome}, você tem ${idade} anos e é ${idade >= 18 ? 'maior' : 'menor'} de idade.`)
}

