import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converNameSurname'
})
export class ConverNameSurnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const array = value.split(" ")
    return array.length >1 ? `${array[0]} ${array[1]}` :  `${array[0]}`
  }

}
