import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeSearchService {

  INITIATIVES: Initiative[] = new InitiativeDataService().INITIATIVES;

  constructor() {
  }

  public search(searchTerm: string, category: number, program: number): Initiative[] {

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
    if (category !== undefined) {

      results = results.filter(function(initiative) {
        // console.log(initiative.category, category, initiative.category === category)
        return initiative.category == category
      });
    }
    if (program !== undefined) {
      results = results.filter(initiative => initiative.program == program);
    }
    return results;
  }

}
