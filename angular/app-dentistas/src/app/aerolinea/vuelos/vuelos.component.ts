import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../../shared/interfaces/vuelo';
import { VuelosService } from '../../shared/services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass'],
  providers: [VuelosService],
})
export class VuelosComponent implements OnInit {
  vuelos: Vuelo[] = [];

  noVuelo: string;
  fecha: string;
  horario: string;
  origen: string;
  destino: string;

  constructor(private vuelosService: VuelosService) {}

  ngOnInit(): void {
    this.vuelosService
      .getVuelos()
      .subscribe((data) => (this.vuelos = data.vuelos));
  }

  onSubmit() {
    this.vuelosService
      .addVuelo({
        noVuelo: this.noVuelo,
        fecha: this.fecha,
        horario: this.horario,
        origen: this.origen,
        destino: this.destino,
      })
      .subscribe((data) => {
        this.vuelos.push({
          noVuelo: this.noVuelo,
          fecha: this.fecha,
          horario: this.horario,
          origen: this.origen,
          destino: this.destino,
        });
      });
  }
}
