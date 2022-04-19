function conectar(){
    console.log("abrindo conexão");
}

function desconectar(){
    console.log("fechando conexão");
}

function cadastrar(dados){
 try{
    conectar()
    if(dados === 2){
        throw 'faltam dados'
    }
    console.log('sucesso');
 }
 catch(erro){
    console.log(erro);
 }
 finally{
     desconectar()
 }
}

cadastrar(2)