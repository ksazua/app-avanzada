import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../services/adoption.service';
import { AuthService } from '../services/auth.service';

interface PetAdoption {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  idDocumento: string;
  cedula: string;
  ocupacion: string;
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
export class PetAdoptionComponent implements OnInit {
  petAdoptions: PetAdoption[] = [];
  user: any;

  steps: Step[] = [
    { label: 'Solicitud', icon: 'pi pi-file', date: 'Jul 12', status: 'completed' },
    { label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'hold' },
    { label: 'Enviar pago', icon: 'pi pi-send', date: 'Jul 12', status: 'upcoming' },
    { label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'upcoming' },
    { label: 'Entrevista', icon: 'pi pi-comment', date: 'Jul 12', status: 'upcoming' },
    { label: 'Mascota adoptada', icon: 'pi pi-heart', date: 'Jul 12', status: 'upcoming' }
  ];

  constructor(
    private adoptionService: AdoptionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserAdoptions();
  }

  loadUserAdoptions(): void {
    this.authService.getCurrentUser().subscribe(
      (currentUser) => {
        const userId = currentUser.id;
        this.adoptionService.getPetAdoptions(userId).subscribe(
          (petAdoptions: PetAdoption[]) => {
            this.petAdoptions = petAdoptions;
            if (this.petAdoptions.length > 0) {
              this.user = this.petAdoptions[0];
            }
          },
          (error) => {
            console.error('Error fetching pet adoptions:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
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
