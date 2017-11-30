import { Initiative } from './initiative';
import * as data from '../assets/initiatives_static.json';

export class InitiativeDataService {

  INITIATIVES: Initiative[] = data['records'];
  CATEGORIES: String[] = data['categories'];
  PROGRAMS: String[]  = data['programs'];

  constructor() {
  }

}
