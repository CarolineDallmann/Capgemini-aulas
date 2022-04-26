import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nome:string = 'Carol'

  cliente = {
    id: 10,
    nome: 'Ana'
  }

  trocar(){
    this.nome = 'Maria'
  }
}
