import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  msg: string = ''
  produtos: any;

  constructor(private serviceProduto: ProdutoService) {
    this.serviceProduto.getAll().subscribe(x => this.produtos = x)
  }


  saveProduto(data: any) {
      this.serviceProduto.save(data).subscribe(x => this.msg = `Produto salvo com sucesso`)
  }

  ngOnInit(): void {
  }

}
