import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private userRoleSubject = new BehaviorSubject<string | null>(
    this.getUserRoleFromStorage()
  );
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(data: { username: string; password: string }): Observable<any> {
    return this.http
      .post<{ role: string, userId: string }>(`${this.apiUrl}/user/login`, data)
      .pipe(
        tap((response) => {
          this.setUserRoleInStorage(response.role);
          this.setUserIdInStorage(parseInt(response.userId, 10));
          this.userRoleSubject.next(response.role);
        })
      );
  }

  register(data: { username: string; password: string }): Observable<any> {
    return this.http.post<{userId: string }>(`${this.apiUrl}/user/register`, data).pipe(
      tap((response) => {
        this.setUserRoleInStorage('user');
        this.setUserIdInStorage(parseInt(response.userId, 10));
        this.userRoleSubject.next('user');
      })
    );
  }

  logout(): void {
    this.clearUserRoleFromStorage();
    this.userRoleSubject.next(null);
  }

  getUserRole(): string | null {
    return this.getUserRoleFromStorage();
  }

  getUserId(): number | null {
    return this.getUserIdFromStorage();
  }

  private getUserIdFromStorage(): number | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return parseInt(localStorage.getItem('userId') || '', 10);
    }
    return null;
  }

  private setUserIdInStorage(id: number): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('userId', id.toString());
    }
  }

  private getUserRoleFromStorage(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('userRole');
    }
    return null;
  }

  private setUserRoleInStorage(role: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('userRole', role);
    }
  }

  private clearUserRoleFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('userRole');
    }
  }
}
