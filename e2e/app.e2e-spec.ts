import { Ip2Page } from './app.po';

describe('ip2 App', () => {
  let page: Ip2Page;

  beforeEach(() => {
    page = new Ip2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
