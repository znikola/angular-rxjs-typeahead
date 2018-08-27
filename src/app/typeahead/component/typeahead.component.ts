import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

import { TypeaheadService } from '../service/typeahead.service';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
})
export class TypeaheadComponent {
  search = new FormControl();

  search$: Observable<string> = this.search.valueChanges;
  searchResults$ = this.search$.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap(query => {
      return this.typeaheadservice.search(query);
    })
  );

  constructor(private typeaheadservice: TypeaheadService) {}
}
