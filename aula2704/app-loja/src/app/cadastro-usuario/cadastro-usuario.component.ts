import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.serviceUsuario.save(data).subscribe(x => this.router.navigate(['/login']))
    
  }


  constructor(private serviceUsuario: UsuarioService,private router: Router) { }

  ngOnInit(): void {
  }

}
