import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercero',
  template: ` <h1>Tercero</h1> `,
})
export class Tercero implements OnInit {
  text = '';

  ngOnInit(): void {}
}
