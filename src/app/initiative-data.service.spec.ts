import { TestBed, inject } from '@angular/core/testing';

import { InitiativeDataService } from './initiative-data.service';

describe('InitiativeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitiativeDataService]
    });
  });

  it('should be created', inject([InitiativeDataService], (service: InitiativeDataService) => {
    expect(service).toBeTruthy();
  }));
});
