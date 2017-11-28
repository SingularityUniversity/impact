import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router,
    private initiativeService: InitiativeService) {

  }

  ngOnInit() {
    this.getInitiatives();
  }

  getInitiatives(): void {
    this.initiativeService.getInitiatives()
      .subscribe(initiatives => this.initiatives = initiatives.slice(1,5));
  }


}
