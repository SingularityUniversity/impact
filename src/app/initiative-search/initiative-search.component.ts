import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { InitiativeSearchService } from '../initiative-search.service';
import { Initiative } from '../initiative';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-initiative-search',
  templateUrl: './initiative-search.component.html',
  styleUrls: ['./initiative-search.component.css'],
  providers: [InitiativeSearchService]
})
export class InitiativeSearchComponent implements OnInit {
  initiatives: Observable<Initiative[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private initiativeSearchService: InitiativeSearchService,
    private router: Router) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    console.log('term', term)
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.initiatives = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.initiativeSearchService.search(term)
        // or the observable of empty initiatives if no search term
        : Observable.of<Initiative[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        console.log('search', this.initiatives)

        return Observable.of<Initiative[]>([]);
      });
  }

  gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }

}
