import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{TableModule} from "primeng/table";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAdoptionComponent } from './pet-adoption/pet-adoption.component';
import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante/tabla-validacion-comprobante.component';
import {Button} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    PetAdoptionComponent,
    TablaValidacionComprobanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    Button
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
