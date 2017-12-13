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

  it('should have a working getInitiative function', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    expect(service.getFeaturedInitiatives().length > 0).toBeTruthy();
  }));

  it('should have initiative data', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    expect(service.INITIATIVES.length > 0).toBeTruthy();
  }));

  it('should have a working search function', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    const initiativeName = service.INITIATIVES[0].name;
    const summary = service.INITIATIVES[0].summary;
    const fakeName = "sjfks3423";
    const initiative = service.search(initiativeName, "", "")[0];
    const noInitiative = service.search(fakeName, "", "")[0];
    expect(initiative.name === initiativeName).toBeTruthy();
    expect(initiative.summary.indexOf(summary) > -1).toBeTruthy();
    expect(noInitiative).toBeUndefined();

  }));

  it('should be able to filter initiatives by ggc focus', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    const ggcFocus = service.INITIATIVES[0].ggc_focus[0];
    const initiative = service.search("", ggcFocus, "")[0];
    expect(initiative.ggc_focus.indexOf(ggcFocus) > -1).toBeTruthy();
  }));

  it('should be able to filter initiatives by tech focus', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    const techFocus = service.INITIATIVES[0].tech_focus[0];
    const initiative = service.search("", "", techFocus)[0];
    expect(initiative.tech_focus.indexOf(techFocus) > -1).toBeTruthy();
  }));

  it('should be able to search initiatives by name and filter results by ggc focus and tech focus', inject([InitiativeSearchService], (service: InitiativeSearchService) => {
    const initiativeName = service.INITIATIVES[0].name;
    const ggcFocus = service.INITIATIVES[0].ggc_focus[0];
    const techFocus = service.INITIATIVES[0].tech_focus[0];
    const initiative = service.search(initiativeName, ggcFocus, techFocus)[0];
    expect(initiative.name === initiativeName).toBeTruthy();
  }));
});
