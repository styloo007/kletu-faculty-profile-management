import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Research } from './research'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Crud4Service {
  REST_API: string = "http://localhost:8000/api/research";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }

  AddResearch(data: Research): Observable<any> {
    let API_URL = `${this.REST_API}/add-research`;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getResearchs() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  getResearch(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-research/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  updateResearch(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-research/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }


  deleteResearch(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-research/${id}`;
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
