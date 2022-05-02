import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

msg: string = ''

  saveContato(data: any) {
      this.serviceContato.save(data).subscribe(x => this.msg = `Contato salvo com sucesso`)
  }

  constructor(private serviceContato: ContatoService) { }

  ngOnInit(): void {
  }

}
