import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Persona[], arg1: string, arg2: string): Persona[] {
    if (value) {
      return value.sort((a: Persona, b: Persona) => {
        if (a[arg1] < b[arg1]) {
          return arg2 === 'desc' ? 1 : -1;
        } else if (b[arg1] < a[arg1]) {
          return arg2 === 'desc' ? -1 : 1;
        } else {
          return 0;
        }
      });
    }
  }
}
