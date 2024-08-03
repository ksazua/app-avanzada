import { Component, OnInit } from '@angular/core';
import { AdoptionService } from '../services/adoption.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface PetAdoption {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  postalCode: string;
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
  form!: any;

  steps: Step[] = [
    { label: 'Solicitud', icon: 'pi pi-file', date: 'Jul 12', status: 'completed' },
  ];

  constructor(
    private adoptionService: AdoptionService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserAdoptions();
  }

  loadUserAdoptions(): void {
    const email = localStorage.getItem('email');

    if (email) {
      this.authService.getCurrentUser(email).subscribe(
        (response) => {
          this.form = response;
          this.user = {
            firstName: response.name,
            lastName: response.lastName,
            email: response.email,
            phone: response.phoneNumber,
            address: response.address,
            idDocumento: response.dni,
            postalCode: response.postalCode,
            role: response.role || 'Cliente'
          };

          if (response.estadoValidacionFormulario == 'pending') {
            this.steps.push(
              { label: 'Pendiente', icon: 'pi pi-check', date: 'Jul 12', status: 'hold' },
            )
          }
          if (response.estadoValidacionFormulario == 'approved') {
            this.steps.push(
              { label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'completed' },
            )
          }
          if (response.estadoValidacionFormulario == 'rejected') {
            this.steps.push(
              { label: 'Rechazado', icon: 'pi pi-ban', date: 'Jul 12', status: 'upcoming' },
            )
          }

          if (response.estadoValidacionFormulario == 'approved') {
            if (response.estadoValidacionPago == 'pending') {
              this.steps.push(
                { label: 'Pendiente', icon: 'pi pi-check', date: 'Jul 12', status: 'hold' },
              )
            }
            if (response.estadoValidacionPago == 'approved') {
              this.steps.push(
                { label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'completed' },
              )
            }
            if (response.estadoValidacionPago == 'rejected') {
              this.steps.push(
                { label: 'Rechazado', icon: 'pi pi-ban', date: 'Jul 12', status: 'completed' },
              )
            }
          }
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }

  getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  }

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
  isPaymentEnabled(): boolean {
    return this.form?.estadoValidacionFormulario === 'approved';
  }

  handlePaymentClick(): void {
    if (!this.isPaymentEnabled()) {
      // Puedes mostrar un mensaje al usuario explicando por qué no puede acceder al pago
      console.log('El pago no está disponible en este momento.');
      // Opcionalmente, puedes usar un servicio de notificación o un modal para informar al usuario
    }
  }
  handlePaymentNavigation(): void {
    if (this.isPaymentEnabled()) {
      this.router.navigate(['/upload-file']);
    } else {
      alert("Su pago no está disponible, su solicitud está en revisión.");
    }
  }
}
