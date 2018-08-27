import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TypeaheadService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `https://swapi.co/api/people/?search=${query}`;
    return this.http.get(url).pipe(
      tap(result => console.log(result)),
      map(result => (result as any).results)
    );
  }
}
