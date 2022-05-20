import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepersonas',
  templateUrl: './detallepersonas.component.html',
  styleUrls: ['./detallepersonas.component.sass'],
})
export class DetallepersonasComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  clavePersona: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.clavePersona = params.id;
    });
  }
}
