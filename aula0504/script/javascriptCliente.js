function salvar(){
    
    let nome = document.querySelector("#nome")
    let telefone = document.querySelector("#telefone")
    let email = document.querySelector("#email")
    let rua = document.querySelector("#rua")
    let bairro = document.querySelector("#bairro")
    let cidade = document.querySelector("#cidade")
    let cep = document.querySelector("#cep")
    let limiteCred = document.querySelector("#limiteCred")
    
    if(nome.value === ""){
        alert('Informe o nome')
        nome.focus()
        return
    } 
    if(telefone.value === ""){
        alert('Informe o telefone')
        telefone.focus()
        return
    } 
    if(email.value === ""){
        alert('Informe o email')
        email.focus()
        return
    } 
    if(rua.value === ""){
        alert('Informe a rua')
        rua.focus()
        return
    } 
    if(bairro.value === ""){
        alert('Informe o bairro')
        bairro.focus()
        return
    } 
    if(cidade.value === ""){
        alert('Informe a cidade')
        cidade.focus()
        return
    } 
    if(cep.value === ""){
        alert('Informe o cep')
        cep.focus()
        return
    } 
    if(limiteCred.value === ""){
        alert('Informe o Limite Crédito')
        limiteCred.focus()
        return
    } 
    document.getElementsByTagName("form")[0].submit()
}

function cancelar(){
    nome.value = ''
    telefone.value = ''
    email.value = ''
    rua.value = ''
    bairro.value = ''
    cidade.value = ''
    cep.value = ''
    limiteCred.value = ''
}