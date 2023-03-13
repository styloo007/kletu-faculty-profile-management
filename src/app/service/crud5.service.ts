import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class Crud5Service {
  REST_API: string = "http://localhost:8000/api/contact";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient: HttpClient) { }

  AddContact(data: Contact): Observable<any> {
    let API_URL = `${this.REST_API}/add-contact`;
    return this.httpClient.post(API_URL, data).pipe(catchError(this.handleError));
  }

  getContacts() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  //get single book
  getContact(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-contact/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }

  

  //update
  updateContact(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-contact/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  //delete
  deleteContact(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-contact/${id}`;
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
