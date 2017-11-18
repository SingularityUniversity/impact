import { Injectable } from '@angular/core';
import { Initiative } from './initiative';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { Headers, Http, Response } from '@angular/http';
import { INITIATIVES } from './in-memory-data.service';

@Injectable()
export class InitiativeService {

  private initiativesUrl = 'api/initiatives';

    constructor(
    private http: Http,
    private messageService: MessageService
  ) { }


  /** GET Initiatives from the server */
  getInitiatives(): Promise<Initiative[]> {
    return this.http
      .get(this.initiativesUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Initiative[];
      })
      .catch(this.handleError)
  }

  getInitiative(name: string): Promise<Initiative> {

    return this.getInitiatives()
      .then(initiatives => initiatives.find(initiative => initiative.name === name));
  }

  save(initiative: Initiative): Promise<Initiative> {
    console.log(initiative)
    if(initiative.id) {
      return this.put(initiative);
    }
    return this.post(initiative);
  }

  delete(initiative: Initiative): Promise<Response> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.initiativesUrl}/${initiative.name}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  private post(initiative: Initiative): Promise<Initiative> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    return this.http
      .post(this.initiativesUrl, JSON.stringify(initiative), {  headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError)
  }

  private put(initiative: Initiative): Promise<Initiative> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.initiativesUrl}/${initiative.id}`;
    console.log(url)

    return this.http
      .put(url, JSON.stringify(initiative), { headers: headers })
      .toPromise()
      .then(() => initiative)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }



  /** Log a InitiativeService message with the MessageService */
private log(message: string) {
  this.messageService.add('InitiativeService: ' + message);
}


}
