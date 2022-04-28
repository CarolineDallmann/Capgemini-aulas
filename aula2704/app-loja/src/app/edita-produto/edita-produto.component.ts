import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../cadastro-produto/produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css']
})
export class EditaProdutoComponent implements OnInit {
 

  constructor(private route: ActivatedRoute, private serviceProduto: ProdutoService) {
    
  }

  produto: any



  ngOnInit(): void {
    let routeParms = this.route.snapshot.paramMap
    let idproduto: number = Number(routeParms.get('idproduto'))
    this.serviceProduto.getOne(idproduto).subscribe(x => this.produto = x)
  }

}
