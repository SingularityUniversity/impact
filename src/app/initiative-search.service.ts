import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeSearchService {

  INITIATIVES: Initiative[] = new InitiativeDataService().INITIATIVES;
  public results: Initiative[] = this.getFeaturedInitiatives();

  constructor() {
  }

  private getFeaturedInitiatives () {
    const names = ['getaround', 'authentise', 'matternet', 'made in space '];
    return this.INITIATIVES.filter(initiative => {
        return names.indexOf(initiative.name.toLowerCase()) > -1
    });

  }


  public search(searchTerm: string, ggc_focus: string, tech_focus: string): Initiative[] {

    this.results = this.INITIATIVES;
    if (searchTerm) {
      searchTerm = searchTerm.toLocaleLowerCase();
      this.results = this.results.filter(
        initiative => {
          if (initiative.summary) {
            return initiative.name.toLowerCase().indexOf(searchTerm) >= 0 || initiative.summary.toLowerCase().indexOf(searchTerm) >= 0
          }
          return initiative.name.toLowerCase().indexOf(searchTerm) >= 0
        });
    }

    if (ggc_focus) {
      this.results = this.results.filter(function(initiative) {
        return initiative.ggc_focus.indexOf(ggc_focus) > -1
      });
    }

    if (tech_focus) {
      this.results = this.results.filter(initiative => initiative.tech_focus.indexOf(tech_focus) > -1);
    }

    return this.results;
  }

}
