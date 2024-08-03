import {Component, OnInit} from '@angular/core';
import {AdoptionService} from '../services/adoption.service';
import {AuthService} from '../services/auth.service';

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
  form!: any;



  steps: Step[] = [
    {label: 'Solicitud', icon: 'pi pi-file', date: 'Jul 12', status: 'completed'},
  ];

  constructor(
    private adoptionService: AdoptionService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loadUserAdoptions();
  }


  loadUserAdoptions(): void {
    const email = localStorage.getItem('email');

    this.authService.getCurrentUser(email!).subscribe(
      (response) => {
        this.form = response;

        if (response.estadoValidacionFormulario == 'pending') {
          this.steps.push(
            {label: 'Pendiente', icon: 'pi pi-check', date: 'Jul 12', status: 'hold'},
          )
        }
        if (response.estadoValidacionFormulario == 'approved') {
          this.steps.push(
            {label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'completed'},
          )
        }
        if (response.estadoValidacionFormulario == 'rejected') {
          this.steps.push(
            {label: 'Rechazado', icon: 'pi pi-ban', date: 'Jul 12', status: 'upcoming'},
          )
        }

        if(response.estadoValidacionFormulario == 'approved') {
          if (response.estadoValidacionPago == 'pending') {
            this.steps.push(
              {label: 'Pendiente', icon: 'pi pi-check', date: 'Jul 12', status: 'hold'},
            )
          }
          if (response.estadoValidacionPago == 'approved') {
            this.steps.push(
              {label: 'Aprobado', icon: 'pi pi-check', date: 'Jul 12', status: 'completed'},
            )
          }
          if (response.estadoValidacionPago == 'rejected') {
            this.steps.push(
              {label: 'Rechazado', icon: 'pi pi-ban', date: 'Jul 12', status: 'completed'},
            )
          }
        }

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
