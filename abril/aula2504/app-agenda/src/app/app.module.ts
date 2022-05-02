import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { BotaoComponent } from './botao/botao.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    CadastroConsultaComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
