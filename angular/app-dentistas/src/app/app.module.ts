import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtileriasModule } from './utilerias/utilerias.module';
import { SharedModule } from './shared/shared.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { FormsModule } from '@angular/forms';
import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Tercero } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { NavegacionRoutingModule } from './navegacion/navegacion-routing.module';
import { DetallepersonasComponent } from './detallepersonas/detallepersonas.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    DetallepersonasComponent,
  ],
  imports: [
    BrowserModule,
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NavegacionRoutingModule,
  ],
  providers: [],
  bootstrap: [ComponentOne],
})
export class ModuleOne {}
