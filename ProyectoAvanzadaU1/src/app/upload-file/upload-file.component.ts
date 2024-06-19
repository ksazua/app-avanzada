import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { format } from 'date-fns';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  form: FormGroup;
  file: File | null = null;
  isSubmitted = false;

  constructor(private messageService: MessageService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  onSelect(event: any) {
    if (this.file) {
      this.messageService.add({ severity: 'warn', summary: 'Advertencia', detail: 'Ya se ha seleccionado un archivo. Elimine el archivo actual para seleccionar uno nuevo.' });
      return;
    }
    this.file = event.files[0];
    this.isSubmitted = false;
  }

  onRemove(event: any) {
    this.file = null;
    this.isSubmitted = false;
    this.messageService.add({ severity: 'info', summary: 'Archivo eliminado', detail: `El archivo ha sido eliminado.` });
  }

  onSubmit() {
    if (this.file) {
      this.isSubmitted = true;
      setTimeout(() => {
        const now = new Date();
        const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: `El archivo ${this.file!.name} ha sido subido con éxito a las ${formattedDate}.` });
        setTimeout(() => {
          this.messageService.add({ severity: 'info', summary: 'Revisión', detail: 'El archivo está en proceso de revisión.' });
        }, 3000); // Simula un retraso en la revisión de 3 segundos
      }, 0); // Mensaje de éxito inmediato al hacer clic en enviar
    }
  }
}
