import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent{

  @Input()
  texto = "botão"

  @Input()
  severidade: 'primary' | 'secondary' | 'danger' = 'primary'

  @Output()
  fuiClicado = new EventEmitter();

  onclick(){
    this.fuiClicado.emit()
  }

}
