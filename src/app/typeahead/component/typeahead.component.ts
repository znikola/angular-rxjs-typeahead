import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { EMPTY, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, catchError, tap } from 'rxjs/operators';

import { TypeaheadService } from '../service/typeahead.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
})
export class TypeaheadComponent {
  search = new FormControl();

  errorMessage = '';

  search$: Observable<string> = this.search.valueChanges;
  searchResults$ = this.search$.pipe(
    tap(_ => (this.errorMessage = '')),
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(query => {
      return this.typeaheadservice.search(query).pipe(
        catchError(error => {
          this.errorMessage = error;
          return EMPTY;
        })
      );
    })
  );

  character$: Observable<any>;

  constructor(private typeaheadservice: TypeaheadService) {}

  openCharacter(url: string): void {
    this.character$ = this.typeaheadservice.get(url).pipe(
      catchError(error => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
}
