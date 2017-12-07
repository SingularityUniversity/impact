import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeSearchService {

  INITIATIVES: Initiative[] = new InitiativeDataService().INITIATIVES;

  constructor() {
  }

  public search(searchTerm: string, ggc_focus: string, tech_focus: string): Initiative[] {

    var results = this.INITIATIVES;
    if (searchTerm !== undefined) {
      searchTerm = searchTerm.toLocaleLowerCase();
      results = results.filter(
        initiative => {
          if (initiative.summary) {
            return initiative.name.toLowerCase().indexOf(searchTerm) >= 0 || initiative.summary.toLowerCase().indexOf(searchTerm) >= 0
          }
          return initiative.name.toLowerCase().indexOf(searchTerm) >= 0
        });
    }
    if (ggc_focus !== undefined) {

      results = results.filter(function(initiative) {
        // console.log(initiative.ggc_focus, ggc_focus, initiative.ggc_focus === ggc_focus)
        return initiative.ggc_focus.indexOf(ggc_focus) > -1
      });
    }
    if (tech_focus !== undefined) {
      results = results.filter(initiative => initiative.tech_focus.indexOf(tech_focus) > -1);
    }
    return results;
  }

}
