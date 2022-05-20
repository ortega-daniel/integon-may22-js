import { Injectable } from '@angular/core';
import { Vuelo } from '../interfaces/vuelo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  private vuelosUrl = 'http://localhost:3000/vuelos';

  constructor(private http: HttpClient) {}

  getVuelos(): Observable<any> {
    return this.http.get<Vuelo[]>(this.vuelosUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }

  addVuelo(vuelo: Vuelo): Observable<any> {
    return this.http.post<Vuelo>(this.vuelosUrl, vuelo);
  }
}
