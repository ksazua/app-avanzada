import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormularioService, Form } from '../services/formulario.service';
import { AdminService, User } from '../services/admin.service';

@Component({
  selector: 'app-tabla-rechazado',
  templateUrl: './tabla-rejected.component.html',
  styleUrls: ['./tabla-rejected.component.css']
})
export class TablaRechazadoComponent implements OnInit {

  forms: Form[] = [];
  searchTerm: string = '';
  pageSize: number = 5;
  currentPage: number = 1;
  originalForms: Form[] = [];
  user: User | null = null;
  userPassword: string = 'admin123'; // Contraseña correcta del administrador

  constructor(private formularioService: FormularioService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchForms();
    this.fetchUser(); // Fetch user information
  }

  fetchForms(): void {
    this.formularioService.getRejectedFormsSummary().subscribe(
      forms => {
        this.forms = forms;
        this.originalForms = forms;
      },
      error => {
        console.error('Error fetching forms:', error);
      }
    );
  }

  fetchUser(): void {
    const userId = 'GONN8RR5Ki6GdXzDS8Ym'; // ID correcto del administrador
    this.adminService.getLoggedInUser(userId, this.userPassword).subscribe(
      user => {
        this.user = user;
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }

  reapproveForm(id: string): void {
    Swal.fire({
      title: '¿Estás seguro de que deseas reaprobar?',
      text: "La solicitud será movida a la lista de aprobaciones.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6abfab',
      cancelButtonColor: '#ff1493',
      confirmButtonText: 'Sí, reaprueba!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formularioService.reapproveForm(id).subscribe(
          () => {
            Swal.fire('Reaprobado!', 'La solicitud ha sido reaprobada.', 'success');
            this.fetchForms(); // Refresh the forms list
          },
          error => {
            console.error('Error reapproving form:', error);
            Swal.fire('Error', 'Hubo un error al reaprobar la solicitud.', 'error');
          }
        );
      }
    });
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  changePageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1; // Reset to first page
  }

  get currentRecords(): Form[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.forms.slice(start, end);
  }

  search(): void {
    this.forms = this.originalForms.filter(form =>
      form.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      form.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      form.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      form.dni.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  protected readonly Math = Math;
}
