import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: `
    <h1>Ejemplo</h1>
    <app-tercero></app-tercero>
  `,
})
export class Ejemplo {
  text = '';
}
