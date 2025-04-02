import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/persona';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private urlLocal = 'http://localhost:5000/api/teams';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  GetLocalData(): Observable<any> {
    return this.http.get<any>(this.urlLocal);
  }

  createEmployee(person: Person): Observable<Person> {
    return this.http.post<Person>(this.urlLocal, person, this.httpOptions);
  }

  updateEmployee(person: Person): Observable<Person> {
    return this.http.put<Person>(
      `${this.urlLocal}/${person.id}`,
      person,
      this.httpOptions
    );
  }

  deleteEmployee(person: Person): Observable<Person> {
    return this.http.delete<Person>(
      `${this.urlLocal}/${person.id}`,
      this.httpOptions
    );
  }

  getEmployees(): Observable<Person[]> {
    return this.http.get<Person[]>(this.urlLocal, this.httpOptions);
  }

  getEmployeeById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.urlLocal}/${id}`, this.httpOptions);
  }
}
