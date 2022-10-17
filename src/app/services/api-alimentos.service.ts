//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Alimento } from '../models/alimento';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAlimentosService {

  // API path
  base_path = 'http://localhost:8000/api/alimentos';



  constructor(private http: HttpClient) { }

  public auth_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2NTk4NTI4OCwiZXhwIjoxNjY4NTc3Mjg4LCJuYmYiOjE2NjU5ODUyODgsImp0aSI6IkQ3UndudFRqcHN4TVAzcGQiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.hndWm6fxo1lqoBt5Gsh25L6CPTrOBqTTzwvvu4Q5iBk";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item): Observable<Alimento> {
    
    return this.http      
      .post<Alimento>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single alimento data by ID
  getItem(id): Observable<Alimento> {
    return this.http
      .get<Alimento>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get alimentos data
  getList(): Observable<Alimento> {
  
    
    /*return this.http
      .get<Alimento>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )*/
      
      //`${environment.apiUrl}/api/Servers/GetServerList`
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth_token}`
      })
      
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('mpManagerToken'))
     });
    //return this.http.get<Server[]>(`${environment.apiUrl}/api/Servers/GetServerList`, { headers: reqHeader });

    //return this.http.get<Observable>(this.base_path, { headers: headers });
    return this.http
      .get<Alimento>(this.base_path, { headers: headers })
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }

  // Update item by id
  updateItem(id, item): Observable<Alimento> {
    return this.http
      .put<Alimento>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Alimento>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}