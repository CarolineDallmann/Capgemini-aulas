import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Contato } from './entities/contato.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaContatos: Contato[] = []

  receberOnSalvarFilho(contato: Contato) {
    this.appService.salvar(contato)
      .then(() => this.carregarDados())
  }

  carregarDados() {
    this.appService.consultaTodos()
      .then(contatos => this.listaContatos = contatos)
  }

  constructor(private appService: AppService) {
    this.carregarDados()
  }


}
