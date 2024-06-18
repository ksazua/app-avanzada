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
import {ToolbarModule} from "primeng/toolbar";
import { TablaValidaFormularioComponent } from './tabla-valida-formulario/tabla-valida-formulario.component';
import {DialogModule} from "primeng/dialog";
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    AppComponent,
    PetAdoptionComponent,
    TablaValidacionComprobanteComponent,
    TablaValidaFormularioComponent,
    UploadFileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TimelineModule,
    ButtonModule,
    FormsModule,
    ToolbarModule,
    DialogModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
