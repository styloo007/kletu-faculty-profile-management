import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Timetable } from './timetable';

@Injectable({
  providedIn: 'root'
})

export class Crud6Service {
  REST_API: string = "http://localhost:8000/api/timetable";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }

  AddTimetable(data: Timetable): Observable<any> {
    let API_URL = `${this.REST_API}`;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getTimetables() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  //get single book
  // getTimetable(id: any): Observable<any> {
  //   let API_URL = `${this.REST_API}/read-timetable/${id}`;
  //   return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(map((res: any) => {
  //     return res || {}
  //   }),
  //     catchError(this.handleError)
  //   )
  // }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
 
}
