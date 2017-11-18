import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Initiative } from './initiative';
import * as data from '../assets/initiatives_static.json';

const initiatives: Initiative[] = data['records'];

export const INITIATIVES = initiatives;

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { initiatives }

  }

}
