import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeSearchService } from '../initiative-search.service';
import { Initiative } from '../initiative';

@Component({
  selector: 'my-initiative-search',
  templateUrl: './initiative-search.component.html',
  styleUrls: ['./initiative-search.component.css'],
  providers: [InitiativeSearchService]
})
export class InitiativeSearchComponent implements OnInit {
  public initiatives: Initiative[];
  public selectedChallenge: Object;
  public selectedProgram: Object;

  public categories: Object[] = [
    {name: "Health", id: 0},
    {name: "Housing", id: 1},
    {name: "Agriculture", id: 2}
  ];

  public programs: Object[] = [
    {name: "New Org", id: 0},
    {name: "Mobilized Resources", id: 1}
  ];


  constructor(
    private initiativeSearchService: InitiativeSearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.activate();
  }

  private activate(): void {
    this.initiatives = this.initiativeSearchService.activate();
  }

  public filterByCategory(value: number) {
    this.initiatives = this.initiativeSearchService.filter('category', value);
  }

  public filterByProgram(value: number) {
    this.initiatives = this.initiativeSearchService.filter('program', value);
  }

  public search(term: string): void {
    this.initiatives = this.initiativeSearchService.search(term);
  }

  public gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }

}
