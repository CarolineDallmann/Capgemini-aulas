import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  contatos: any

  constructor(private serviceContato: ContatoService) {
    this.serviceContato.getAll().subscribe(x => this.contatos = x)
  }

  ngOnInit(): void {
  }

}
