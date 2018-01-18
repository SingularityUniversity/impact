import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { InitiativeDetailComponent } from './initiative-detail/initiative-detail.component';
import { InitiativeDataService } from './initiative-data.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { routing } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitiativeSearchComponent } from './initiative-search/initiative-search.component';
import { HeaderComponent } from './header/header.component';
import { InitiativesComponent } from './initiatives/initiatives.component';
import {UserComponent} from "./user/user.component";
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    InitiativeDetailComponent,
    InitiativeSearchComponent,
    InitiativesComponent,
    MessagesComponent,
    UserComponent,
  ],
  exports: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    InitiativeDetailComponent,
    InitiativeSearchComponent,
    InitiativesComponent,
    MessagesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    SlideMenuModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [InitiativeDataService, MessageService, AuthService],
  bootstrap: [AppComponent]

})


export class AppModule { }
