class Agenda{
    constructor(data, hora, descricao, convidado){
        this.data = data;
        this.hora = hora;
        this.descricao = descricao;
        this.convidado = this.convidado
    }

    display(){
        console.log(`
        Data: ${this.data} 
        Hora: ${this.hora}
        Descricrição: ${this.descricao} 
        Convidado: ${this.convidado}`);
    }

}

let registro =  new Agenda('10/02/2022', '14:00', 'Encontro', 'Maria')
registro.display()