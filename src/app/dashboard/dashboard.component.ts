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
  error: any;

  constructor(
    private router: Router,
    private initiativeService: InitiativeService) {

  }

  ngOnInit() {
    this.getInitiatives();
  }

  getInitiatives(): void {
    this.initiativeService.getInitiatives()
      .then(initiatives => this.initiatives = initiatives.slice(1,5))
      .catch(error => this.error = error);
  }

    gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }


}
