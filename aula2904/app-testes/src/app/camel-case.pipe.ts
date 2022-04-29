import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let palavras = value.split(" ")

    let fraseCap = ""
    for (let p of palavras) {
      fraseCap += this.capitaliza(p) + ' '
    }
    return fraseCap
  }

  capitaliza(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
