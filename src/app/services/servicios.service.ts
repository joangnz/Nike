import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/persona';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private urlLocal = "https://localhost:5000/api/teams";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {};

  GetLocalData():Observable<any> {
    return this.http.get<any>(this.urlLocal);
  }

  createEmployee(person:Person):Observable<Person>{
    return this.http.post<Person>(this.urlLocal, JSON.stringify(person), this.httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in post')
        console.error(err);
        return throwError(err);
      })
    )
  }

  updateEmployee(person:Person):Observable<Person>{
    return this.http.put<Person>(this.urlLocal, JSON.stringify(person), this.httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in put')
        console.error(err);
        return throwError(err);
      })
    )
  }

  deleteEmployee(person:Person):Observable<Person>{
    return this.http.delete<Person>(this.urlLocal + `${person.id}`, this.httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in delete')
        console.error(err);
        return throwError(err);
      })
    )
  }

  getEmployees():Observable<Person[]>{
    return this.http.get<Person[]>(this.urlLocal, this.httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in get')
        console.log(err);
        return throwError(err);
      })
    )
  }

  getEmployeeById(id: number):Observable<Person>{
    return this.http.get<Person>(this.urlLocal + `/${id}`, this.httpOptions).pipe(
      catchError((err) => {
        console.log('error caught in getId');
        console.error(err);
        return throwError(err);
      })
    );
  }
}
