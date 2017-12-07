import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeSearchService } from '../initiative-search.service';
import { Initiative } from '../initiative';
import { InitiativeDataService } from '../initiative-data.service';
import {FormControl} from '@angular/forms';
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
  public selectedGGC: string;
  public selectedTech: string;
  public searchTerm: string;
  public ggcs: String[];
  public techs: String[];

  public searchControl = new FormControl();


  constructor(
    private initiativeSearchService: InitiativeSearchService,
    private initiativeDataService: InitiativeDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.activate();
  }

  ngAfterViewInit(): void {
    this.setupSearch();
  }

  private activate(): void {
    this.initiatives = this.initiativeDataService.INITIATIVES.slice(0, 4);
    this.ggcs = this.initiativeDataService.GGCS;
    this.techs = this.initiativeDataService.TECHS;
    this.ggcs.push("");
    this.techs.push("")
  }

  private setupSearch() {
    this.searchControl.valueChanges
      .debounceTime(100)
      .subscribe(() => {
        const t0 = window.performance.now();
        this.initiatives = this.initiativeSearchService.search(
          this.searchTerm, this.selectedGGC, this.selectedTech
        );
        const t1 = window.performance.now();
        console.info('search time(ms):', t1 - t0)
      });
  }

  public gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }

  public search() {
    this.initiatives = this.initiativeSearchService.search(
          this.searchTerm, this.selectedGGC, this.selectedTech
        );
  }
}
