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

  @Input () initiative: Initiative;
  constructor(
    private route: ActivatedRoute,
    private initiativeService: InitiativeService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getInitiative();
  }

  getInitiative() {
    const name = this.route.snapshot.params['name'];
    this.initiative = this.initiativeService.getInitiative(name);
    this.initiative.ggc = this.initiative.ggc_focus.join(", ");
    this.initiative.tech = this.initiative.tech_focus.join(", ");
    this.initiative.region = this.initiative.region_of_impact.join(", ");
    console.log(this.initiative)
  }

  goBack(): void {
    this.location.back();
  }

}
