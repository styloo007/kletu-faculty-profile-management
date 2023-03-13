import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Publication } from './publication'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Crud3Service {
  REST_API: string = "http://localhost:8000/api/publication";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }

  AddPublication(data: Publication): Observable<any> {
    let API_URL = `${this.REST_API}/add-publication`;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getPublications() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  getPublication(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-publication/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  updatePublication(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-publication/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }


  deletePublication(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-publication/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

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
