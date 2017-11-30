import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { MessageService } from './message.service';
import { InitiativeDataService } from './initiative-data.service';

@Injectable()
export class InitiativeService {

    constructor(
    private messageService: MessageService,
    private initiativeDataService: InitiativeDataService
  ) { }


  /** GET Initiatives */
  getInitiatives(): Initiative[] {
    this.messageService.add("InitiativeService: fetched heroes");
    return this.initiativeDataService.INITIATIVES;
  }

  getInitiative(name: string): Initiative {
    this.messageService.add(`InitiativeService: fetched initiative name=${name}`)
    return this.initiativeDataService.INITIATIVES.find(initiative => initiative.name === name);
  }

  /** Log a InitiativeService message with the MessageService */
private log(message: string) {
  this.messageService.add('InitiativeService: ' + message);
}


}
