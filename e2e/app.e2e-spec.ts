import { ImpactPage } from './app.po';
import {by, element} from "protractor";

describe('impact App', function() {
  let page: ImpactPage;

  beforeEach(() => {
    page = new ImpactPage();
  });


  it('jumbotron class should have a background image with a background-size value of "cover"', () => {
    // let elem = by.css('.jumbotron');
    // expect(element(by.css('.jumbotron')).getCssValue('backgroundSize')).toEqual('cover');
    });
});
