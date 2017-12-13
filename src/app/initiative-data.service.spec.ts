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

  it('should have initiative data', inject([InitiativeDataService], (service: InitiativeDataService) => {
    expect(service.INITIATIVES.length > 0);
  }))

  it('should have ggc options data', inject([InitiativeDataService], (service: InitiativeDataService) => {
    expect(service.GGCS.length > 0);
  }))

  it('should have tech options data', inject([InitiativeDataService], (service: InitiativeDataService) => {
    expect(service.TECHS.length > 0);
  }))

  it('should have regions of impact data', inject([InitiativeDataService], (service: InitiativeDataService) => {
    expect(service.REGIONS.length > 0);
  }))
});
