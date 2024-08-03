import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Form {
  id: string;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  estadoValidacionFormulario: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private apiUrl = 'http://localhost:3000/api/forms';

  constructor(private http: HttpClient) { }

  getAllForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiUrl);
  }

  getFormsSummary(): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.apiUrl}/summary`);
  }

  approveForm(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/approve`, {});
  }

  rejectForm(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/reject`, {});
  }
}
