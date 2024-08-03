import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private apiUrl = 'http://localhost:3000/api/forms';

  constructor(private http: HttpClient) { }

  createAdoptionForm(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, formData);
  }
}
