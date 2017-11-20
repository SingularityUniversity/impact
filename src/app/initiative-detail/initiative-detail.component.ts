import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Initiative } from '../initiative';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InitiativeService } from '../initiative.service';

@Component({
  selector: 'app-initiative-detail',
  templateUrl: './initiative-detail.component.html',
  styleUrls: ['./initiative-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InitiativeDetailComponent implements OnInit {
  error: any;

  @Input () initiative: Initiative;
  constructor(
    private route: ActivatedRoute,
    private initiativeService: InitiativeService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getInitiative();
  }

  getInitiative(): void {
    const name = this.route.snapshot.params['name'];
    this.initiativeService.getInitiative(name)
      .then(initiative => this.initiative = initiative)
      .catch(error => this.error = error)
  }

  save(): void {
    this.initiativeService.save(this.initiative)
      .then(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

}