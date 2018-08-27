import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TypeaheadService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `https://swapi.co/api/people/?search=${query}`;
    return this.http.get(url).pipe(
      tap(result => console.log(result)),
      map(result => (result as any).results),
      catchError(error => {
        console.log(`error while searching`, error);
        throw new Error(`search is not working`);
      })
    );
  }

  get(link: string): Observable<any> {
    return this.http.get(link).pipe(
      catchError(error => {
        console.log(`error while getting a character`, error);
        throw new Error(`get character is not working`);
      })
    );
  }
}
