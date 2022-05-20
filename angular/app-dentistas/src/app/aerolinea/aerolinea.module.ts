import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosComponent } from './vuelos/vuelos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VuelosComponent],
  imports: [CommonModule, FormsModule],
  exports: [VuelosComponent],
})
export class AerolineaModule {}
