//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Nutricionista } from '../models/nutricionista';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiNutricionistaService {

  // API path
  base_path = 'http://localhost:8000/api/nutricionistas';



  constructor(private http: HttpClient) { }

  public auth_token = localStorage.getItem('data_token');
  
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
  createItem(item): Observable<Nutricionista> {
    
    return this.http      
      .post<Nutricionista>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single nutricionista data by ID
  getItem(id): Observable<Nutricionista> {
    return this.http
      .get<Nutricionista>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get nutricionista data
  getList(): Observable<Nutricionista> {
  
    
    /*return this.http
      .get<Nutricionista>(this.base_path)
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
      .get<Nutricionista>(this.base_path, { headers: headers })
      .pipe(
        retry(2),
        catchError(this.handleError)
      )

  }

  // Update item by id
  updateItem(id, item): Observable<Nutricionista> {
    return this.http
      .put<Nutricionista>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Nutricionista>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}