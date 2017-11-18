import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { InitiativeService } from '../initiative.service'
import {Initiative} from "../initiative";



@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InitiativeComponent implements OnInit {

  initiatives: Initiative[];
  error: any;


  constructor(private initiativeService: InitiativeService) {

  }

  ngOnInit() {
    this.getInitiatives();
  }

  getInitiatives(): void {
    this.initiativeService.getInitiatives()
      .then(initiatives => this.initiatives = initiatives)
      .catch(error => this.error = error);
  }

  add(name: string, summary: string, url: string): void {
    name = name.trim();
    summary = summary.trim();
    url = url.trim();
    if(!name) { return; }
    this.initiativeService.save({ name, summary, url } as Initiative)
      .then(initiative => {
        this.initiatives.push(initiative)
      })
  }

  delete(initiative: Initiative): void {
    this.initiatives = this.initiatives.filter(i => i !== initiative);
    this.initiativeService.delete(initiative).then();
  }


}
