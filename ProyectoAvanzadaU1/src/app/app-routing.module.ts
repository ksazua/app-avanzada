import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetAdoptionComponent } from "./pet-adoption/pet-adoption.component";
import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante/tabla-validacion-comprobante.component';

const routes: Routes = [
  { path: 'pet-adoption', component: PetAdoptionComponent },
  { path: 'tabla-validacion-comprobante', component: TablaValidacionComprobanteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
