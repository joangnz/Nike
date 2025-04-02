import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient) {}

  loginAdmin(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/admin/login`, credentials)
      .pipe(tap(() => this.userRoleSubject.next('admin')));
  }

  loginUser(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http
    .post(`${this.apiUrl}/user/login`, credentials)
    .pipe(tap(()=>this.userRoleSubject.next('user')));
  }

  registerUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, data);
  }

  logout(): void {
    this.userRoleSubject.next(null);
  }
}
