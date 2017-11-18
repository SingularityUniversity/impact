import { TestBed, inject } from '@angular/core/testing';

import { InitiativeSearchService } from './initiative-search.service';

describe('InitiativeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitiativeSearchService]
    });
  });

  it('should be created', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
