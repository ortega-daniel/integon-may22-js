import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
