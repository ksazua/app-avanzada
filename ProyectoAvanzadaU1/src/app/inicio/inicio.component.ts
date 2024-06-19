import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  items: MenuItem[]| undefined
  ngOnInit() {
    this.items = [
      {label: 'Usuario', icon: 'pi pi-fw pi-user'},
      {label: 'Administrador', icon: 'pi pi-fw pi-cog'}
    ];
  }


}
