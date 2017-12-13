/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HeaderComponent} from "./header/header.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent,
      ],
      imports: [RouterTestingModule.withRoutes(
        []
      )],
    });
    TestBed.compileComponents();
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));

});
