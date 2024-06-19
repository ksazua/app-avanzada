import {Component, ChangeDetectorRef, ViewEncapsulation} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import Swal from "sweetalert2";

interface PetAdoption {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  receiptImagePath: string;
}

interface Event {
  status: string;
  date: Date;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-tabla-validacion-comprobante',
  templateUrl: './tabla-validacion-comprobante.component.html',
  styleUrl: './tabla-validacion-comprobante.component.css',

})
export class TablaValidacionComprobanteComponent  {

  constructor(private cd: ChangeDetectorRef) { }

  petAdoptions: PetAdoption[] = [
  {
    id: 1,
    firstName: 'Josue',
    lastName: 'Espinoza',
    email: 'josuespin@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante1.jpg'
  },
  {
    id: 2,
    firstName: 'Kevin',
    lastName: 'Azua',
    email: 'azuakke@example.com',
    phone: '123-456-7891',
    address: '124 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante2.jpg'
  },
  {
    id: 3,
    firstName: 'Fabricio',
    lastName: 'Alama',
    email: 'fabalama@example.com',
    phone: '123-456-7892',
    address: '125 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante3.jpg'
  },
  {
    id: 4,
    firstName: 'Fernando',
    lastName: 'Vivanco',
    email: 'frvivanc@example.com',
    phone: '123-456-7893',
    address: '126 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante4.jpg'
  },
  {
    id: 5,
    firstName: 'Steven',
    lastName: 'Stopper',
    email: 'stevenstop@example.com',
    phone: '123-456-7894',
    address: '127 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante5.jpg'
  },
  {
    id: 6,
    firstName: 'Jack',
    lastName: 'Doe',
    email: 'jack.doe@example.com',
    phone: '123-456-7895',
    address: '128 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante6.jpg'
  },
  {
    id: 7,
    firstName: 'James',
    lastName: 'Doe',
    email: 'james.doe@example.com',
    phone: '123-456-7896',
    address: '129 Main St, Los Angeles, CA',
    status: 'completed',
    receiptImagePath: 'img/comprobante7.jpg'
  }
];




  get progressWidth(): string {
    // Aquí puedes definir la lógica para calcular el ancho de la barra de progreso
    // Por ejemplo, puedes calcularlo en base a la cantidad de adopciones completadas
    const completedCount = this.petAdoptions.filter(adoption => adoption.status === 'completed').length;
    return `${(completedCount / this.petAdoptions.length) * 100}%`;
  }

  // Función para obtener las iniciales
  getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }

  // Función para obtener la clase de estado
  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'bg-green-200';
      case 'pending':
        return 'bg-yellow-200';
      case 'hold':
        return 'bg-red-200';
      default:
        return '';
    }
  }

  aceptar(id: number) {
    Swal.fire({
      title: '¿Estás seguro de que deseas aprobar?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6abfab',
      cancelButtonColor: '#ff1493',
      confirmButtonText: 'Sí, apruébalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Aprobado!',
          'La adopción ha sido aprobada.',
          'success'
        )
        console.log(`Adopción con ID ${id} aprobada.`);
        // Aquí puedes agregar la lógica para manejar la aprobación
      }
    });
  }

  rechazar(id: number) {
    Swal.fire({
      title: '¿Estás seguro de que deseas rechazar?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6abfab',
      cancelButtonColor: '#ff1493',
      confirmButtonText: 'Sí, recházalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Rechazado!',
          'La adopción ha sido rechazada.',
          'success'
        )
        console.log(`Adopción con ID ${id} rechazada.`);
        // Aquí puedes agregar la lógica para manejar el rechazo
      }
    });
  }











  //metodos para numerar tabla
  pageSize = 5;
  currentPage = 1;

  changePage(page: number) {
    this.currentPage = page;
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.currentPage = 1; // Volver a la primera página
  }
  get currentRecords() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.petAdoptions.slice(start, end);
  }

  protected readonly Math = Math;

  originalPetAdoptions = [...this.petAdoptions];
  //metodos para buscar
  searchTerm = '';

  search() {
    this.petAdoptions = this.originalPetAdoptions.filter(adoption =>
      adoption.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      adoption.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      adoption.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Ver imagen comprobante
  receiptImagePath: string = '';
  displayModal: boolean = false;




  verComprobante(receiptPath: string) {
    this.receiptImagePath = receiptPath;
    this.displayModal = true;
    this.cd.detectChanges();
  }






}


