import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../cadastro-usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService, private router: Router) { }

  usuarios: any
  usuarioConectado = {
    id: 0,
    nome: "",
    email: "",
    senha: "",
    perfil: "",
  }

  fazerLogin(dados: any) {
    this.serviceUsuario.getAll().subscribe(x => {
      this.usuarios = x
      this.verificarLogin(dados.email, dados.senha, this.usuarios)
      this.router.navigate(['/home']);
    })
  }

  verificarLogin(email: string, senha: string, dados: any) {
    localStorage.removeItem('userConectado')
    for (let i = 0; i < dados.length; i++) {
      if (email == dados[i].email && senha == dados[i].senha) {
        this.usuarioConectado.id = dados[i].id
        this.usuarioConectado.nome = dados[i].nome
        this.usuarioConectado.email = dados[i].email
        this.usuarioConectado.senha = dados[i].senha
        this.usuarioConectado.perfil = dados[i].perfil
        this.gravarDadosLocalStorage()
      }
    }
  }

  gravarDadosLocalStorage() {
    localStorage.setItem("userConectado", JSON.stringify(this.usuarioConectado))
  }

  ngOnInit(): void {
  }

}
