import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor2'
})
export class Conversor2Pipe implements PipeTransform {

  transform(value: boolean, trueString:string, falseString:string): unknown {
    return value ? trueString : falseString;
  }

}
