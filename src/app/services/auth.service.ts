import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  /**
   * Admin login
   * @param credentials - Admin username and password
   * @returns Observable with the login response
   */
  loginAdmin(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/login`, credentials);
  }

  /**
   * User login
   * @param credentials - User username and password
   * @returns Observable with the login response
   */
  loginUser(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, credentials);
  }

  /**
   * Register a new user
   * @param data - User registration data
   * @returns Observable with the registration response
   */
  registerUser(data: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, data);
  }

  /**
   * Logout the current user
   * @returns void
   */
  logout(): void {
    // Implement logout logic if needed (e.g., clearing tokens or session data)
    console.log('User logged out');
  }
}
