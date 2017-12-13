import { Component, OnInit } from '@angular/core';

import {  Initiative } from '../initiative';
import {InitiativeSearchService} from "../initiative-search.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [InitiativeSearchService]
})

export class DashboardComponent implements OnInit {
  initiatives: Initiative[] = [];

  constructor(
    private initiativeSearchService: InitiativeSearchService) {
  }

  ngOnInit() {
    this.initiatives = this.initiativeSearchService.results;
  }

  /**
   * assigns initiatives emitted from other components to component's initiative array
   * @param {object[]} emittedInitiatives:
   */
  getInitiatives(emittedInitiatives: Initiative[]): void {
    this.initiatives = emittedInitiatives;
  }


}
