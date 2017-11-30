import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {  Initiative } from '../initiative';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None

})

export class DashboardComponent implements OnInit {
  initiatives: Initiative[] = [];

  constructor(
    private initiativeService: InitiativeService) {

  }

  ngOnInit() {
    this.getInitiatives();
  }

  getInitiatives(): void {
    // this.initiativeService.getInitiatives()
  }


}
