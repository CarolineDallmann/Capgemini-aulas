import { Component, Input, OnInit } from '@angular/core';
import { Contato } from '../entities/contato.entity';

@Component({
  selector: 'app-cadastro-consulta',
  templateUrl: './cadastro-consulta.component.html',
  styleUrls: ['./cadastro-consulta.component.css']
})
export class CadastroConsultaComponent {

@Input()
listaContatos:Contato[] = []

json = JSON


}
