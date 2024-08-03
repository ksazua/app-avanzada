import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, credentials);
  }

  getCurrentUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getCurrentUser(): Observable<any> {
    const userId = this.getCurrentUserId();
    if (userId) {
      return this.http.get<any>(`http://localhost:3000/api/users/${userId}`);
    } else {
      throw new Error('User not logged in');
    }
  }
}
