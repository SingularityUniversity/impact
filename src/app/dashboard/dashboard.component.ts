import { Component, OnInit } from '@angular/core';

import {  Initiative } from '../initiative';
import {InitiativeSearchService} from "../initiative-search.service";
import {InitiativeSearchComponent} from "../initiative-search/initiative-search.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [InitiativeSearchService],

})

export class DashboardComponent implements OnInit {
  initiatives: Initiative[] = [];

  constructor(
    private initiativeSearchService: InitiativeSearchService) {

  }

  ngOnInit() {
    this.initiatives = this.initiativeSearchService.results;
  }

  getInitiatives(initiatives): void {
    console.log('dashboard initiatives', this.initiatives)
    this.initiatives = initiatives;
  }


}
