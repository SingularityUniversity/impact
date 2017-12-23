import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InitiativeSearchService } from '../initiative-search.service';
import { Initiative } from '../initiative';
import { InitiativeDataService } from '../initiative-data.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'my-initiative-search',
  templateUrl: './initiative-search.component.html',
  styleUrls: ['./initiative-search.component.css'],
  providers: [InitiativeSearchService, InitiativeDataService]
})
export class InitiativeSearchComponent implements OnInit {
  public initiatives: Initiative[];
  public selectedGGC: string;
  public selectedTech: string;
  public searchTerm: string;
  public ggcs: String[];
  public techs: String[];

  public searchControl = new FormControl();

  @Output() searchConducted: EventEmitter<Initiative[]> = new EventEmitter<Initiative[]>();


  constructor(
    private initiativeSearchService: InitiativeSearchService,
    private initiativeDataService: InitiativeDataService) {

  }

  ngOnInit(): void {
    this.activate();
  }

  ngAfterViewInit(): void {
    this.setupSearch();
  }

  /**
   * Loads list of technologies and global grand challenges for the select tag
   */
  private activate(): void {
    this.ggcs = this.initiativeDataService.GGCS;
    this.techs = this.initiativeDataService.TECHS;
    this.ggcs.unshift("");
    this.techs.unshift("");
  }

  /**
   * Sets up an event listener that searches for initiatives when user types in
   * the search input box. Emits search results to other components.
   */
  public setupSearch() {
    this.searchControl.valueChanges
      .debounceTime(100)
      .subscribe(() => {
        this.initiatives = this.initiativeSearchService.search(
          this.searchTerm, this.selectedGGC, this.selectedTech
        );
        this.searchConducted.emit(this.initiatives);
      });
  }


  /**
   * Searches initiatives
   */
  public search() {
    this.initiatives = this.initiativeSearchService.search(
          this.searchTerm, this.selectedGGC, this.selectedTech
        );
    this.searchConducted.emit(this.initiatives)
  }
}
