import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../cadastro-produto/produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {


  constructor(private route: ActivatedRoute, private serviceProduto: ProdutoService, private router: Router) {

  }

  produto: any = {}

  msg: string = ''

  ngOnInit(): void {
    let routeParms = this.route.snapshot.paramMap
    let idproduto: number = Number(routeParms.get('idproduto'))
    this.serviceProduto.getOne(idproduto).subscribe(x => this.produto = x)
  }

  efetivarAlteracao() {
    this.serviceProduto.alterar(this.produto).subscribe(x => this.router.navigate(['/cadastroproduto']))
  }

}
