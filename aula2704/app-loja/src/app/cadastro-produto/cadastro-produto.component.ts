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
    this.loadProdutos()
  }

  loadProdutos(){
    this.serviceProduto.getAll().subscribe(x => this.produtos = x)
  }


  saveProduto(data: any) {
    this.serviceProduto.save(data).subscribe(x => this.msg = `Produto salvo com sucesso`)
    this.loadProdutos()
  }

  excluir(id: any) {
    this.serviceProduto.excluir(id).subscribe(x => this.msg = `Produto excluído com sucesso`)
    this.loadProdutos()
  }

  ngOnInit(): void {
  }

}
