import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-loja';

  userLogado: any = {}

  pegarPerfilUsuarioConectado() {
    let user: (string | null) = localStorage.getItem("userConectado")
    if (user != null) {
      user = JSON.parse(user)
      this.userLogado = user
    }
  }

  constructor(private router: Router) {
    this.pegarPerfilUsuarioConectado();
    const outroThis = this
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value])
      if(key === 'userConectado'){
        outroThis.pegarPerfilUsuarioConectado()
      }
    }

  }

  logout() {
    localStorage.removeItem('userConectado')
    this.userLogado = {}
    this.router.navigate(['/login']);
  }
}
