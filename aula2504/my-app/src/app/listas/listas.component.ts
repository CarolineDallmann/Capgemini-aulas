import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  frutas: string[] = []
  constructor() {
    this.frutas.push('maçã')
    this.frutas.push('laranja')
    this.frutas.push('morango')
    this.frutas.push('uva')
   }
}
