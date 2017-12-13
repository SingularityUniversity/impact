import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { InitiativeDetailComponent } from './initiative-detail.component';
import { InitiativeSearchService } from '../initiative-search.service'
import {Initiative} from "../initiative";
import {mock_initiative} from "../initiative-data.service";



const initiative: Initiative = mock_initiative;

const InitiativeSearchServiceStub = {

  getInitiative:() =>  {
    return initiative
  }
}


describe('InitiativeDetailComponent', () => {
  let component: InitiativeDetailComponent;
  let fixture: ComponentFixture<InitiativeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeDetailComponent ],
      imports: [RouterTestingModule.withRoutes(
        [  { path: 'detail/:name', component: InitiativeDetailComponent }
        ]
      )],
      providers: [{provide: InitiativeSearchService, useValue: InitiativeSearchServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeDetailComponent);
    component = fixture.componentInstance;
    component.initiative = initiative;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
