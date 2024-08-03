import { Component, OnInit } from '@angular/core';
import { FormularioService, Form } from '../services/formulario.service';

@Component({
  selector: 'app-tabla-rejected',
  templateUrl: './tabla-rejected.component.html',
  styleUrls: ['./tabla-rejected.component.css']
})
export class TablaRejectedComponent implements OnInit {
  forms: Form[] = [];

  constructor(private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.fetchRejectedForms();
  }

  fetchRejectedForms(): void {
    this.formularioService.getRejectedForms().subscribe(
      forms => {
        this.forms = forms;
      },
      error => {
        console.error('Error fetching rejected forms:', error);
      }
    );
  }
}

