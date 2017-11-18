import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Initiative } from './initiative';

@Injectable()
export class InitiativeSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Initiative[]> {
    return this.http
      .get(`app/initiatives/?name=${term}`)
      .map((r: Response) => r.json().data as Initiative[])
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }
}
