import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tabla-upload-file',
  templateUrl: './tabla-upload-file.component.html',
  styleUrls: ['./tabla-upload-file.component.css']
})
export class TablaUploadFileComponent {
  receiptImagePath: string = '';
  displayModal: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  verComprobante(receiptPath: string) {
    this.receiptImagePath = receiptPath;
    this.displayModal = true;
    this.cd.detectChanges();
  }
}
