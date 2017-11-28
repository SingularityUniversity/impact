import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { INITIATIVES } from './in-memory-data.service';

@Injectable()
export class InitiativeSearchService {
  constructor() {
  }

  public activate(): Initiative[] {
    if (INITIATIVES.length > 4) {
      return INITIATIVES.slice(0, 4);
    } else {
      return INITIATIVES;
    }
  }

  public search(term: string): Initiative[] {
    term = term.toLocaleLowerCase();
    var results = INITIATIVES.filter(initiative => initiative.name.toLowerCase().indexOf(term) >= 0);
    return results;
  }

  public filter(key: string, value: any): Initiative[] {
    return INITIATIVES.filter(initiative => initiative[key] == value)
  }
}
