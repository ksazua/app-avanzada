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

  constructor(private messageService: MessageService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  onSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Revisión', detail: 'El archivo está en proceso de revisión.' });
    for (let file of event.files) {
      this.simulateUpload(file);
    }
  }

  simulateUpload(file: File) {
    setTimeout(() => {
      const now = new Date();
      const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');
      console.log('Archivo subido:', file.name);
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: `El archivo ha sido subido con éxito a las ${formattedDate}.` });
    }, 3000); // Simula un retraso en la subida de 3 segundos
  }
}
