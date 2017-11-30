import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeSearchService } from '../initiative-search.service';
import { Initiative } from '../initiative';
import { InitiativeDataService } from '../initiative-data.service';
import {FormControl} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'my-initiative-search',
  templateUrl: './initiative-search.component.html',
  styleUrls: ['./initiative-search.component.css'],
  providers: [InitiativeSearchService, InitiativeDataService]
})
export class InitiativeSearchComponent implements OnInit {
  public initiatives: Initiative[];
  public selectedCategory: number;
  public selectedProgram: number;
  public searchTerm: string;
  public categories: String[];
  public programs: String[];

  public searchControl = new FormControl();


  constructor(
    private initiativeSearchService: InitiativeSearchService,
    private initiativeDataService: InitiativeDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.activate();
  }

  ngAfterViewInit() {
    this.setupSearch();
  }

  private activate(): void {
    this.initiatives = this.initiativeDataService.INITIATIVES.slice(0, 4);
    this.categories = this.initiativeDataService.CATEGORIES;
    this.programs = this.initiativeDataService.PROGRAMS;
  }

  private setupSearch() {
    this.searchControl.valueChanges
      .debounceTime(100)
      .subscribe(() => {
        const t0 = window.performance.now();
        this.initiatives = this.initiativeSearchService.search(
          this.searchTerm, this.selectedCategory, this.selectedProgram
        );
        console.log(this.initiatives);
        const t1 = window.performance.now();
        console.info('search time(ms):', t1 - t0)
      });
  }

  public gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }
}
