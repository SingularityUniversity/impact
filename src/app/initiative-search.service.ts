import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeSearchService {

  INITIATIVES: Initiative[] = new InitiativeDataService().INITIATIVES;
  public results: Initiative[] = this.getFeaturedInitiatives();

  constructor() {
  }

  /**
   * Retrieves featured initiatives
   * @returns {Initiative[]}
   */
  public getFeaturedInitiatives () {
    const names = ['getaround', 'authentise', 'matternet', 'made in space '];
    return this.INITIATIVES.filter(initiative => {
        return names.indexOf(initiative.name.toLowerCase()) > -1
    });
  }

  /**
   * Retrieves initiative
   * @param {string} name of initiative to be retrieved
   * @returns {undefined|Initiative}
   */
  public getInitiative(name: string): Initiative {
    return this.INITIATIVES.find(initiative => initiative.name === name);
  }

  /**
   * Searches for initiatives
   * @param searchTerm - search string
   * @param ggc_focus - Global Grand Challenge of desired initiatives
   * @param tech_focus - Technology focus of desired initiatives
   * @returns {Initiative[]}
   */
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
    // Filter results by GGC focus if need be
    if (ggc_focus) {
      this.results = this.results.filter(function(initiative) {
        return initiative.ggc_focus.indexOf(ggc_focus) > -1
      });
    }
    // Filter results by Technology focus if need be
    if (tech_focus) {
      this.results = this.results.filter(initiative => initiative.tech_focus.indexOf(tech_focus) > -1);
    }

    return this.results;
  }

}
