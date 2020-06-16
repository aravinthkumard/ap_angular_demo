import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pound2kg'
})
export class Pound2kgPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    if(value == 0 || value <0 ){
      return 0
    }
    
    return +(value*9460660000000).toFixed(4);
  }

}
