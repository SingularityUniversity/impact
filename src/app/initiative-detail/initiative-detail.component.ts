import { Component, OnInit, Input } from '@angular/core';
import { Initiative } from '../initiative';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InitiativeSearchService } from '../initiative-search.service';
import {InitiativeDataService} from "../initiative-data.service";



@Component({
  selector: 'app-initiative-detail',
  templateUrl: './initiative-detail.component.html',
  styleUrls: ['./initiative-detail.component.css'],
  providers: [InitiativeSearchService]
})
export class InitiativeDetailComponent implements OnInit {
  ggcBlurb: string;
  @Input() initiative: Initiative;
  constructor(
    private route: ActivatedRoute,
    private initiativeSearchService: InitiativeSearchService,
    private initiativeDataService: InitiativeDataService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.activate();
  }

  /**
   * Gets initiative to be displayed and stringify it's array properties
   */
  activate() {
    const name: string = this.route.snapshot.params['name'];
    this.initiative = this.initiativeSearchService.getInitiative(name);
    this.initiative.ggc = this.initiative.ggc_focus.join(", ");
    this.initiative.tech = this.initiative.tech_focus.join(", ");
    this.initiative.region = this.initiative.region_of_impact.join(", ");
    this.ggcBlurb = this.initiativeDataService.getBlurb(this.initiative.ggc_focus[0])
  }


  /**
   * Sends user back to previous page
   */
  goBack(): void {
    this.location.back();
  }

}
