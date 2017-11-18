import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { InitiativeComponent } from './initiative/initiative.component';
import { InitiativeDetailComponent } from './initiative-detail/initiative-detail.component';
import { InitiativeService } from './initiative.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitiativeSearchComponent } from './initiative-search/initiative-search.component';


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
    InitiativeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 200}),

  ],
  providers: [InitiativeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
