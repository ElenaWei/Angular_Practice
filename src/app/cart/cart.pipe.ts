import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'calculateTotalPrice'
})
export class CalculatePipe implements PipeTransform {
  transform(value: number, quantity: number) {
    if (!value) {
      return null;
    }
    return value * quantity;
  }
}
