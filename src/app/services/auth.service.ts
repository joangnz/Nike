import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  loginAdmin(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/login`, credentials);
  }

  loginUser(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, credentials);
  }

  registerUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, data);
  }
}
