import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor4'
})
export class Conversor4Pipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch(args){
      case 'euro':
        return `€${value}`

      case 'dolar':
        return `$${value}`
      default:
        return '';
    }
  }

}
