import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeSearchService {

  INITIATIVES: Initiative[] = new InitiativeDataService().INITIATIVES;
  public results: Initiative[] = this.INITIATIVES.slice(0, 2);

  constructor() {
  }

  public search(searchTerm: string, ggc_focus: string, tech_focus: string): Initiative[] {

    this.results = this.INITIATIVES;
    if (searchTerm !== undefined) {
      searchTerm = searchTerm.toLocaleLowerCase();
      this.results = this.results.filter(
        initiative => {
          if (initiative.summary) {
            return initiative.name.toLowerCase().indexOf(searchTerm) >= 0 || initiative.summary.toLowerCase().indexOf(searchTerm) >= 0
          }
          return initiative.name.toLowerCase().indexOf(searchTerm) >= 0
        });
    }
    if (ggc_focus !== undefined) {

      this.results = this.results.filter(function(initiative) {
        return initiative.ggc_focus.indexOf(ggc_focus) > -1
      });
    }
    if (tech_focus !== undefined) {
      this.results = this.results.filter(initiative => initiative.tech_focus.indexOf(tech_focus) > -1);
    }
    return this.results;
  }

}
