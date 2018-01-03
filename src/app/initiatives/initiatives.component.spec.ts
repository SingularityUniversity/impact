import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesComponent } from './initiatives.component';
import {InitiativeSearchService} from "../initiative-search.service";
import {RouterTestingModule} from "@angular/router/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {mock_initiative} from "../initiative-data.service";



const InitiativeSearchServiceStub = {
  getInitiative: (name) =>  {
    return {
      name: 'Authentise',
      ggc_focus: [],
      tech_focus: [],
      region_of_impact: [],
      summary: '',
    }
  }
}

describe('InitiativesComponent', () => {
  let component: InitiativesComponent;
  let fixture: ComponentFixture<InitiativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativesComponent ],
      imports: [RouterTestingModule.withRoutes(
        [])
      ],
      providers: [{provide: InitiativeSearchService, useValue: InitiativeSearchServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativesComponent);
    component = fixture.componentInstance;
    component.initiatives = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message of "No Initiatives Found"', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.no-initiatives'));
    let noInitiativesFoundMessage: string;
    if(de) {
      noInitiativesFoundMessage = de.nativeElement.textContent;
    }
    expect(de).toBeDefined();
    expect(noInitiativesFoundMessage).toContain('No Initiatives Found');
  });

  it('should display initiative name', () => {
    component.initiatives = [ mock_initiative ];
    fixture.detectChanges();
    let de: DebugElement = fixture.debugElement.query(By.css('.search-results'));
    let initiativesContent: string;
    if(de) {
      initiativesContent = de.nativeElement.textContent;
    }
    expect(de).toBeDefined();
    expect(initiativesContent).toContain('Authentise');
  })
});
