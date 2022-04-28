import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EditaProdutoComponent } from './edita-produto/edita-produto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'produtos/:idproduto',
    component: EditaProdutoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'cadastroproduto',
    component: CadastroProdutoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrousuario',
    component: CadastroUsuarioComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
