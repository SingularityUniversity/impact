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

export const mock_initiative: Initiative =  {
  id: 1,
  name: 'Authentise',
  ggc: '',
  tech: '',
  region: '',
  ggc_focus: [],
  tech_focus: [],
  region_of_impact: [],
  summary: '',
  url: '',
  type_of_initiative: 'New Organization'

}
