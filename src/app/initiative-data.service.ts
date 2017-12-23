import { Initiative } from './initiative';
import * as data from '../assets/initiatives.json';

export class InitiativeDataService {

  INITIATIVES: Initiative[] = data['records'];
  GGCS: String[] = data['ggc_focus_options'];
  TECHS: String[]  = data['tech_focus_options'];
  REGIONS: String[] = data['region_of_impact_options'];

  private ggc_details = {
    "security": {
      "icon": "fa-shield",
      "blurb": "Safety of all people from physical and psychological harm, " +
      "including in virtual worlds; and protection of physical, financial, " +
      "digital systems."
    },

    "energy": {
      "icon": "fa-bolt",
      "blurb": "Ample, accessible and sustainable energy for the needs of humanity.",
    },
    "environment": {
      "icon": "fa-leaf",
      "blurb": "Sustainable and equitable stewardship of Earth's ecosystems for" +
      " optimal functioning both globally and locally.",
    },
    "food": {
      "icon": "fa-cutlery",
      "blurb": "Consumption of sufficient, safe, and nutritious food to maintain healthy " +
      "and active lives for all people at all times.",
    },
    "shelter": {
      "icon": "fa-house",
      "blurb": "Secure, safe, and sustainable shelter for residence, recreation, and" +
      " industry for all people at all times.",
    },
    "space": {
      "icon": "fa-rocket",
      "blurb": "Safe and equitable use, and stewardship of, space resources and " +
      "technologies for the benefit of humanity and our future as a multi-planetary " +
      "species.",
    },
    "water": {
      "icon": "fa-waterdrop",
      "blurb": "Ample and safe water for consumption, sanitation, industry, and recreation " +
      "for all people at all times.",
    },
    "disaster resilience": {
      "icon": "fa-plus-square",
      "blurb": "Effective and efficient disaster risk reduction, emergency " +
      "response, and rehabilitation that saves lives and livelihoods, minimizes economic " +
      "loss, and builds resilience both globally and locally.",
    },
    "governance": {
      "icon": "fa-balance-scale",
      "blurb": "Equitable participation of all people in formal and societal " +
      "governance that is in accordance with principles of justice and individual " +
      "rights, free from discrimination and identity-based prejudices, and able to " +
      "meet the needs of an exponentially changing world.",
    },
    "health": {
      "icon": "fa-medkit",
      "blurb": "Optimal physical and mental health, including access to cost-effective " +
      "prevention, early diagnosis, and personalized therapy for individuals and " +
      "communities.",
    },
    "learning": {
      "icon": "fa-learning",
      "blurb": "Access to information and experiences that build knowledge and " +
      "skills for all people at all stages of their lives for personal fulfillment " +
      "and benefit to society.",
    },
    "prosperity": {
      "icon": "fa-money",
      "blurb": "Equitable access to economic and other opportunities for " +
      "self-fulfillment where all people are free from poverty and able to thrive.",
    },
  };

  public getBlurb (ggc: string) {
    return this.ggc_details[ggc.toLowerCase()].blurb;
  }

  public getIcon (ggc: string) {
    return this.ggc_details[ggc.toLowerCase()].icon;
  }

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
