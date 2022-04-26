import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from '../entities/contato.entity';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent {
  nome: string = ""
  email: string = ""
  telefone: string = ""

@Output()
onSalvarFilho = new EventEmitter<Contato>();

  salvar(){
    this.onSalvarFilho.emit({
      nome: this.nome,
      email: this.email,
      telefone: this.telefone})
  }
  
  
  constructor() { }

  

}
