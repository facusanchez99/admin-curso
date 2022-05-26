import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor3'
})
export class Conversor3Pipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let palabra:string = 'pipe'
    switch(args){
      case 'custom':
        palabra = 'custom';
        break;
      case 'curso':
        palabra = 'curso';
        break;
    }
    return `${palabra} ${value}`;
  }

}
