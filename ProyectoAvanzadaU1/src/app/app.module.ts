import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button'; // Cambiado a ButtonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAdoptionComponent } from './pet-adoption/pet-adoption.component';
import { TablaValidacionComprobanteComponent } from './tabla-validacion-comprobante/tabla-validacion-comprobante.component';

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
    TimelineModule,
    ButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
