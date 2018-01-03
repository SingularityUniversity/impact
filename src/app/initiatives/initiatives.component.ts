import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {Initiative} from "../initiative";
import {Router} from "@angular/router";
import {InitiativeDataService} from "../initiative-data.service";

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css'],
})
export class InitiativesComponent implements OnInit {
  @Input() initiatives;

  constructor(
    private sanitizer: DomSanitizer,
    private initiativeDataService: InitiativeDataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Select and assign icon to initiative
   * @param {object} initiative
   * @returns {string}
   */
  getIcon(initiative: Initiative): string {
    return this.initiativeDataService.getIcon(initiative.ggc_focus[0]);
  }

  /**
   * Select and assign sanitized image url to initiative
   * @param {object} initiative
   * @returns {SafeStyle}
   */
  getBackground(initiative): SafeStyle {
    const image_url = this.initiativeDataService.getTechImage(initiative.tech_focus[0]);
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image_url})`)
  }

  /**
   * Routes user to selected initiative's detail page
   * @param initiative
   */
  public gotoDetail(initiative: Initiative): void {
    const link = ['/detail', initiative.name];
    this.router.navigate(link).then();
  }

}
