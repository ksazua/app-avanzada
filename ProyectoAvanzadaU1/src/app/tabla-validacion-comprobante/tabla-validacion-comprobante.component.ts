import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/api";

interface ValidacionComprobante {
  id: number;
  fecha: string;
  tipo: string;
  estado: string;
  monto: number;
}

@Component({
  selector: 'app-tabla-validacion-comprobante',
  templateUrl: './tabla-validacion-comprobante.component.html',
  styleUrl: './tabla-validacion-comprobante.component.css'
})
export class TablaValidacionComprobanteComponent implements OnInit {
 verificaciones: any[] = [];

ngOnInit() {
  this.verificaciones = [
    {id: 1, fecha: '2022-01-01', tipo: 'Tipo 1', estado: 'Estado 1', monto: 100},
    {id: 2, fecha: '2022-02-01', tipo: 'Tipo 2', estado: 'Estado 2', monto: 200},
    {id: 3, fecha: '2022-03-01', tipo: 'Tipo 3', estado: 'Estado 3', monto: 300},
    {id: 4, fecha: '2022-04-01', tipo: 'Tipo 4', estado: 'Estado 4', monto: 400},
    {id: 5, fecha: '2022-05-01', tipo: 'Tipo 5', estado: 'Estado 5', monto: 500},
  ];
}

 onAccept(verificacion: any) {
  // Implementa la lógica para aceptar una verificación aquí
  console.log(`Verificación aceptada: ${JSON.stringify(verificacion)}`);
}

onReject(verificacion: any) {
  // Implementa la lógica para rechazar una verificación aquí
  console.log(`Verificación rechazada: ${JSON.stringify(verificacion)}`);
}
}
