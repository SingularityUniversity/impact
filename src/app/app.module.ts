import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { InitiativeDetailComponent } from './initiative-detail/initiative-detail.component';
import { InitiativeService } from './initiative.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitiativeSearchComponent } from './initiative-search/initiative-search.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.


  @NgModule({
  declarations: [
    AppComponent,
    InitiativeComponent,
    InitiativeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    InitiativeSearchComponent,
    HeaderComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SlideMenuModule,
  ],

  providers: [InitiativeService, MessageService],
  bootstrap: [AppComponent]
})


export class AppModule { }
