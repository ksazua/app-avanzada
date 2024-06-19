import { Component } from '@angular/core';

interface PetAdoption {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  idDocumento: string;
  cedula: string; // Cédula
  ocupacion: string; // Ocupación
}

interface Step {
  label: string;
  icon: string;
  date: string;
  status: 'completed' | 'current' | 'hold' | 'upcoming';
}

@Component({
  selector: 'app-pet-adoption',
  templateUrl: './pet-adoption.component.html',
  styleUrls: ['./pet-adoption.component.css'],
})
export class PetAdoptionComponent {
  petAdoptions: PetAdoption[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Los Angeles, CA',
      status: 'completed',
      idDocumento: 'DOC123456',
      cedula: '1234567890', // Ejemplo de cédula
      ocupacion: 'Developer' // Ejemplo de ocupación
    }
    // Puedes añadir más datos de adopciones según sea necesario
  ];

  get user() {
    return this.petAdoptions.find(petAdoption => petAdoption.id === 1);
  }


  steps: Step[] = [
    { label: 'Review started', icon: 'pi pi-envelope', date: 'Jul 12', status: 'completed' },
    { label: 'Approved', icon: 'pi pi-check', date: 'Jul 12', status: 'completed' },
    { label: 'Foster contract', icon: 'pi pi-file', date: 'Jul 12', status: 'completed' },
    { label: 'CC Collected', icon: 'pi pi-credit-card', date: 'Jul 12', status: 'completed' },
    { label: 'Foster sent out', icon: 'pi pi-send', date: 'Jul 12', status: 'hold' },
    { label: 'Pet adopted', icon: 'pi pi-heart', date: 'Jul 12', status: 'upcoming' }
  ];

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

  // Función para obtener la clase de paso
  getStepClass(step: Step): string {
    switch (step.status) {
      case 'completed':
        return 'bg-green-500 text-white';
      case 'current':
        return 'bg-yellow-400 text-white';
      case 'hold':
        return 'bg-yellow-400 text-white hold';
      case 'upcoming':
        return 'bg-gray-400 text-white';
      default:
        return '';
    }
  }

  // Función para obtener la clase de separador
  getSeparatorClass(index: number): string {
    if (index < this.steps.length - 1) {
      if (this.steps[index].status === 'completed' && this.steps[index + 1].status === 'completed') {
        return 'bg-green-500';
      } else if (this.steps[index].status === 'completed' && this.steps[index + 1].status === 'hold') {
        return 'bg-yellow-400';
      } else {
        return 'bg-gray-300';
      }
    }
    return '';
  }
}
