import { ImpactPage } from './app.po';

describe('impact App', function() {
  let page: ImpactPage;

  beforeEach(() => {
    page = new ImpactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
