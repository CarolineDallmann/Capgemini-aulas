import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  descricao: string = ""
  produto = {
    id: 0,
    descricao: "",
    preco: 0
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
