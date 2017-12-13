import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import {RouterTestingModule} from "@angular/router/testing";
import {InitiativesComponent} from "../initiatives/initiatives.component";
import {InitiativeSearchComponent} from "../initiative-search/initiative-search.component";
import {InitiativeSearchService} from "../initiative-search.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {element, by} from "protractor";

const InitiativeSearchServiceStub = {
  getInitiative: (name) =>  {
    return {
      name: 'Authentise',
      ggc_focus: [],
      tech_focus: [],
      region_of_impact: [],
      summary: '',
    }
  },

  results: []
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, InitiativeSearchComponent, InitiativesComponent ],
      imports: [RouterTestingModule.withRoutes(
        []), FormsModule, ReactiveFormsModule
      ],
      providers: [{provide: InitiativeSearchService, useValue: InitiativeSearchServiceStub}]

    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    // query for the jumbotron <div> by CSS element selector
    de = fixture.debugElement.query(By.css('div.jumbotron'));
    if(de) {
      el = de.nativeElement;
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a jumbotron div', () => {
    expect(el).toBeDefined()
  })


});
