import { TestBed } from '@angular/core/testing';

import { TypeaheadService } from './typeahead.service';

describe('TypeaheadService', () => {
  let service: TypeaheadService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeaheadService],
    });
    service = TestBed.get(TypeaheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
