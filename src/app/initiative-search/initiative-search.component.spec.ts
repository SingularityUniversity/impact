import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeSearchComponent } from './initiative-search.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InitiativeSearchService} from "../initiative-search.service";
import {mock_initiative} from "../initiative-data.service";

describe('InitiativeSearchComponent', () => {
  let component: InitiativeSearchComponent;
  let fixture: ComponentFixture<InitiativeSearchComponent>;
  const initiativeSearchServiceStub = {
      search () {
        return mock_initiative
      }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeSearchComponent ],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: InitiativeSearchComponent}]),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ { provide: InitiativeSearchService, useValue: initiativeSearchServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search function', () => {
    expect(component.search).toBeTruthy();
  });

  it('should have a setupSearch function', () => {
    expect(component.setupSearch).toBeTruthy();
  });

  it('search should return correct initiative', () => {
      component.searchTerm = 'Authentise';
      fixture.detectChanges();
      component.search();
      console.log(component.initiatives);
  })
});
