import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetAdoptionComponent } from "./pet-adoption/pet-adoption.component";
import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante/tabla-validacion-comprobante.component';
import {TablaValidaFormularioComponent} from "./tabla-valida-formulario/tabla-valida-formulario.component";
import {UploadFileComponent} from "./upload-file/upload-file.component";

const routes: Routes = [
  { path: 'pet-adoption', component: PetAdoptionComponent },
  { path: 'tabla-validacion-comprobante', component: TablaValidacionComprobanteComponent },
  { path: 'tabla-valida-formulario', component: TablaValidaFormularioComponent},
  { path: 'upload-file', component: UploadFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
