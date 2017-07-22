import { CrosshelpPage } from './app.po';

describe('crosshelp App', () => {
  let page: CrosshelpPage;

  beforeEach(() => {
    page = new CrosshelpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
