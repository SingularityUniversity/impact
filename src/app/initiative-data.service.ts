import { Initiative } from './initiative';
import * as data from '../assets/initiatives.json';

export class InitiativeDataService {

  INITIATIVES: Initiative[] = data['records'];
  GGCS: String[] = data['ggc_focus_options'];
  TECHS: String[]  = data['tech_focus_options'];
  REGIONS: String[] = data['region_of_impact_options'];

  constructor() {
  }

}
