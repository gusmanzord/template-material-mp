import { TemplateMaterialMpPage } from './app.po';

describe('template-material-mp App', () => {
  let page: TemplateMaterialMpPage;

  beforeEach(() => {
    page = new TemplateMaterialMpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
