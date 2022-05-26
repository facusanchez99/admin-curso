import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Pipe ${value}`;
  }

}
