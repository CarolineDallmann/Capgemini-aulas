import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  msg: string = ''

  saveUsuario(data: any) {
       data = { ...data, perfil:'USER' }
    this.serviceUsuario.save(data).subscribe(x => this.msg = `Usuário salvo com sucesso`)
  }

  // limparInput(data:any) {
  //   data = {}
  //   console.log('chamou');

  // }

  constructor(private serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
  }

}
