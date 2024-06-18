import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';



import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAdoptionComponent } from './pet-adoption/pet-adoption.component';
import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante/tabla-validacion-comprobante.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    PetAdoptionComponent,
    TablaValidacionComprobanteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,

    ButtonModule,
    InputTextModule,
    TimelineModule,
    ButtonModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
