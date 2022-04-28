import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }



  // getProduct(id: number): Observable<Product> {
  //   if (id === 0) {
  //     return of(this.initializeProduct());
  //   }
  //   const url = `${this.productsUrl}/${id}`;
  //   return this.http.get<Product>(url)
  //     .pipe(
  //       tap(data => console.log('getProduct: ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }



  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


}
