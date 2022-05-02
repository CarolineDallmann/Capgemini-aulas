function onSubmit(){
    var nome = document.querySelector("#nome")
    var idade = document.querySelector("#idade")
    var email = document.querySelector("#email")
    var data = document.querySelector("#data")
    var dataLocal = document.querySelector("#dataLocal")
    var senha = document.querySelector("#senha")

    if(nome.value === ""){
        alert("Informe o nome")
        nome.focus()
        return
    }
    if(idade.value === ""){
        alert("Informe a idade")
        idade.focus()
        return
    }
    if(email.value === ""){
        alert("Informe a email")
        email.focus()
        return
    }
    if(data.value === ""){
        alert("Informe a data")
        data.focus()
        return
    }
    if(dataLocal.value === ""){
        alert("Informe a data e horário")
        dataLocal.focus()
        return
    }
    if(senha.value === ""){
        alert("Informe a data e horário")
        senha.focus()
        return
    }

   document.getElementsByTagName("form")[0].submit()

}