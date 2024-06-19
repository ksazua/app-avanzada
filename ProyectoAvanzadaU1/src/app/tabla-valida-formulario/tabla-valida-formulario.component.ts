import { Component } from '@angular/core';
import Swal from "sweetalert2";
interface PetAdoption {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

interface Event {
  status: string;
  date: Date;
  icon: string;
  color: string;
}
@Component({
  selector: 'app-tabla-valida-formulario',
  templateUrl: './tabla-valida-formulario.component.html',
  styleUrl: './tabla-valida-formulario.component.css'
})
export class TablaValidaFormularioComponent {

  petAdoptions: PetAdoption[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Los Angeles, CA',
      status: 'completed',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    },
    {
      id: 3,
      firstName: 'Josue Espinoza',
      lastName: 'Zambrano',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    },
    {
      id: 4,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    },
    {
      id: 5,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    }
    ,{
      id: 6,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    },{
      id: 7,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Oak Ave, Los Angeles, CA',
      status: 'pending',
    }


  ];



  // Define la propiedad progressWidth y su lógica de cálculo
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

}
